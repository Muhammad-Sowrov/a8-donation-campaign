import DonatesCard from "./DonatesCard";

const Donates = ({donates}) => {
    console.log(donates);
    return (
        <div className="py-10">
            <h2 className="container mx-auto text-center">All the Cards here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    donates?.map(donate => <DonatesCard key={donate.id} donate={donate}></DonatesCard>)
                }
            </div>
        </div>
    );
};

export default Donates;