interface Props {
  title: string;
  image: string;
  description: string;
}

const HostInfoCard = ({ title, image, description }: Props) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-zinc-700 max-w-sm transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm mb-3">{description}</p>
      </div>
    </div>
  );
};

export default HostInfoCard;
