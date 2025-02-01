import { Building2 } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Building2 size={34} />,
    name: "Farm Fresh",
  },
  {
    icon: <Building2 size={34} />,
    name: "Easy Boba",
  },
  {
    icon: <Building2 size={34} />,
    name: "Firoz Farsan",
  },
  {
    icon: <Building2 size={34} />,
    name: "ITS Bahrain",
  },
  {
    icon: <Building2 size={34} />,
    name: "Aura Power tools",
  },
  {
    icon: <Building2 size={34} />,
    name: "Oh Man",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Customers
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
