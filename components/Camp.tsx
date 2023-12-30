import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-secondary p-4">
            <Image
              src="https://res.cloudinary.com/midefulness/image/upload/v1699983877/Pelican%20Holdings/road_ylcvq7.png"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-main">{title}</h4>
            <p className="regular-14 text-main">{subtitle}</p>
          </div>
        </div>

        {/* <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div> */}
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-camp-bg3"
          title="Pelican Holdings"
          subtitle="Road Construction"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-camp-bg2"
          title="Pelican Holdings"
          subtitle="Road Construction"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-main p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-60 capitalize text-white">
            <strong>FEELING OVERWHELMED TO TAKE THE FIRST STEPS?</strong>{" "}
            NAVIGATE THE BITUMEN WORLD WITH US!
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Use Pelican products and services to pave the way and build the road
            for your journey. Crafted with the finest raw materials using the
            state of art technology, Pelican will make your vision into a
            reality.
          </p>
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1699907290/Pelican%20Holdings/quote_nvgrz6.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
