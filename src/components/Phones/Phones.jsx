import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className="py-10">
            <h2 className="container mx-auto text-center">All the Cards here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;