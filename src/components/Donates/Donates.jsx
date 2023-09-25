import DonatesCard from "./DonatesCard";

const Donates = ({donates}) => {
    // console.log(donates);
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    donates?.map(donate => <DonatesCard key={donate.id} donate={donate}></DonatesCard>)
                }
            </div>
        </div>
    );
};

export default Donates;