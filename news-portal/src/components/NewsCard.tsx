import Link from "next/link";

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-2 duration-300">
      {/* News Image */}
      <div className="relative w-full h-48">
        <img src={imageUrl} alt="News image" className="object-cover w-full h-full" />
      </div>

      {/* News Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title.substring(0,65)}..</h3>
        <p className="text-gray-600 mt-2 text-sm">{description.substring(0,140)}..</p>
        <Link href={link}>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
