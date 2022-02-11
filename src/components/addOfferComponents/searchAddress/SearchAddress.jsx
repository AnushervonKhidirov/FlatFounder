import React, { useState, memo, useMemo } from "react";
import { YMaps, Map, Placemark, withYMaps } from "react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../../app/offer";
import styles from './SearchAddress.module.css';

const Location = memo(({ ymaps }) => {
    const formData = useSelector(state => state.offerData);
    const dispatch = useDispatch();
    const [coords, setCoords] = useState([38.576275, 68.779716]);
    const [zoom, setZoom] = useState(11);
    const hasApNum = formData.value.property === 'apartment' || formData.value.property === 'room';

    function setAddress({ address, apartmentNumber }) {
        const suggestView = new ymaps.SuggestView("suggest");
        const newData = Object.assign({}, formData.value.form);
        address === '' ? newData.address = null : newData.address = {
            addressText: address,
            coordinates: coords,
            apartmentNumber: apartmentNumber ? apartmentNumber : null
        };

        if (!hasApNum) delete newData.address.apartmentNumber;

        suggestView._panel._anchor.value = address;
        suggestView.destroy();

        dispatch(setFormData(newData));
    }

    const loadSuggest = (ymaps) => {
        const searchControl = new ymaps.control.SearchControl({
            options: {
                provider: "yandex#map"
            }
        });

        const suggestView = new ymaps.SuggestView("suggest");

        suggestView.events.add("select", (e) => {
            searchControl
                .search(e.get("item").value)
                .then((data) => {
                    // console.log(data.metaData.geocoder.request);

                    setCoords(data.geoObjects.get(0).geometry.getCoordinates());
                    setAddress({ address: e.get("item").value, coordinates: data.geoObjects.get(0).geometry.getCoordinates() });
                    setZoom(17);
                })
                .catch((e) => console.log(e));
        });
    };

    const onMapClick = (event) => {
        const newCoords = event.get("coords");

        ymaps.geocode(newCoords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            setCoords(newCoords);

            // setAddress(firstGeoObject.getAddressLine(), newCoords);


            if (firstGeoObject.getPremiseNumber()) {
                const newAddress = [
                    firstGeoObject.getCountry(),
                    firstGeoObject.getLocalities(),
                    firstGeoObject.getThoroughfare(),
                    firstGeoObject.getPremiseNumber()
                ].join(", ");
                setAddress({ address: newAddress, coordinates: newCoords });
            } else {
                const newAddress = [
                    firstGeoObject.getCountry(),
                    // firstGeoObject.getAdministrativeAreas(),
                    firstGeoObject.getLocalities(),
                    firstGeoObject.getThoroughfare()
                ].join(", ");
                setAddress({ address: newAddress, coordinates: newCoords });
            }

            // if (firstGeoObject.getPremiseNumber()) {
            //     const newAddress = [
            //         firstGeoObject.getAdministrativeAreas(),
            //         firstGeoObject.getLocalities(),
            //         firstGeoObject.getThoroughfare(),
            //         firstGeoObject.getPremiseNumber()
            //     ].join(", ");
            //     setAddress(newAddress, newCoords);

            //     console.log(newAddress);
            // } else if (firstGeoObject.getThoroughfare()) {
            //     const newAddress = [
            //         firstGeoObject.getLocalities(),
            //         firstGeoObject.getThoroughfare()
            //     ].join(", ");
            //     setAddress(newAddress, newCoords);

            //     console.log(newAddress);
            // } else {
            //     console.log(firstGeoObject.getAdministrativeAreas().join(", "));
            // }
        });
    };

    return (
        <>
            <div className={styles.input_place} >
                <input type="text" id='suggest' placeholder='Введите адрес' onBlur={(e) => setAddress(e.target.value)} />
                {hasApNum ? <input className={styles.apartment_number} type="text" placeholder="Квартира" onChange={(e) => setAddress({ address: formData.value.form.address.addressText, apartmentNumber: e.target.value })} /> : null}
            </div>

            <Map
                onLoad={(ymaps) => loadSuggest(ymaps)}
                state={{ center: coords, zoom: zoom }}
                onClick={onMapClick}
                modules={["SuggestView", "control.SearchControl", "geocode"]}
                style={{ width: '100%', height: '20em', border: '.1em solid #ccc', borderRadius: '.2em', overflow: 'hidden', boxSizing: 'border-box' }}
            >
                <Placemark geometry={coords} options={{ preset: 'islands#circleDotIcon', iconColor: '#5bbbba' }} />
            </Map>
        </>
    );
});

function SearchAddress() {
    const ConnectedMap = useMemo(() => {
        return withYMaps(Location, true);
    }, []);

    return <YMaps query={{ apikey: '2df9578d-9c9d-4e3e-95eb-892c660bdb70' }}>
        <ConnectedMap />
    </YMaps>
}

export default SearchAddress;