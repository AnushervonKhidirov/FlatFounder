import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import styles from './Offers.module.css';


function Offers() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [requestOffers, setRequestOffers] = useState({});

    useEffect(() => {
        setRequestOffers({
            action: searchParams.get('action'),
            search: searchParams.get('search') || 'all',
        })
    }, [searchParams]);

    const offers = [
        {
            id: 1,
            offerDate: '17.01.2022',
            squareFootage: 83,
            rooms: 3,
            floor: 5,
            totalFloors: 14,
            price: 350000,
            phoneNumber: 901803481,
            images: ['https://images.dwell.com/photos/6158387786045366272/6191290565376466944/medium.jpg', 'image-1.jpg'],
            address: 'Москва, Измайловский проезд, 10к3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem molestias quia in voluptas labore optio aliquam animi, ducimus laudantium itaque rem velit reprehenderit, nulla vel officiis, tempora minus vitae?'
        },
        {
            id: 2,
            offerDate: '17.01.2022',
            squareFootage: 64,
            rooms: 2,
            floor: 3,
            totalFloors: 6,
            price: 200000,
            phoneNumber: 901813481,
            images: ['https://dw1ixebl10gex.cloudfront.net/wp-content/uploads/2020/12/21200557/feature-LivingRoom-091_TREES_HH_AP20_40.jpg', 'image-1.jpg'],
            address: 'Москва, Измайловский проезд, 10к3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem molestias quia in voluptas labore optio aliquam animi, ducimus laudantium itaque rem velit reprehenderit, nulla vel officiis, tempora minus vitae?'
        },
        {
            id: 3,
            offerDate: '17.01.2022',
            squareFootage: 70,
            rooms: 2,
            floor: 1,
            totalFloors: 4,
            price: 30000,
            phoneNumber: 9018034121,
            images: ['https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/09/go_vertical-e1631861554552.jpg', 'image-1.jpg'],
            address: 'Москва, Измайловский проезд, 10к3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem molestias quia in voluptas labore optio aliquam animi, ducimus laudantium itaque rem velit reprehenderit, nulla vel officiis, tempora minus vitae?'
        }
    ]

    return <div className={styles.offers_list}>
        {offers.map(offer => <Offer offer={offer} key={offer.id} />)}
    </div>
}


function Offer({ offer }) {
    return <div className={styles.offer}>
        <OfferImage image={offer.images[0]} />
        <OfferInfo offerInfo={offer} />
    </div>
}

function OfferImage({ image }) {
    return <div className={styles.offer_image_wrapper}>
        <div className={styles.offer_image} style={{ backgroundImage: `url(${image})` }} />
    </div>
}

function OfferInfo({ offerInfo }) {
    return <div className={styles.offer_info}>
        <GeneralInfo
            squareFootage={offerInfo.squareFootage}
            rooms={offerInfo.rooms}
            floor={offerInfo.floor}
            totalFloors={offerInfo.totalFloors}
            address={offerInfo.address} />
        <Price price={offerInfo.price} squareFootage={offerInfo.squareFootage} />
        <Description desc={offerInfo.description} />
        <OfferFooter />
    </div>
}

function GeneralInfo(generalInfo) {
    return <div className={styles.general_info}>
        <Params squareFootage={generalInfo.squareFootage} rooms={generalInfo.rooms} />
        <Floor cur={generalInfo.floor} total={generalInfo.totalFloors} />
        <Address address={generalInfo.address} />
    </div>
}


function Params({ squareFootage, rooms }) {
    return <div className={styles.params}>{squareFootage}м<sup>2</sup>, {rooms}-комнатная квартира</div>
}

function Floor({ cur, total }) {
    return <div className={styles.floor}>{cur} этаж из {total}</div>
}

function Address({ address }) {
    return <div className={styles.address}>{address}</div>
}

function Price({ price, squareFootage }) {
    return <div className={styles.price_wrapper}>
        <div className={styles.price}>{price}с</div>
        <div className={styles.price_sf}>{Math.round(price / squareFootage)}c за м<sup>2</sup></div>
    </div>
}

function Description({ desc }) {
    return <div className={styles.description}>{desc}</div>
}

function OfferFooter() {
    return <div className={styles.offer_footer}>
        <Button title='Показать номер' />
        <Button title='Сравнить' />
    </div>
}


export default Offers;