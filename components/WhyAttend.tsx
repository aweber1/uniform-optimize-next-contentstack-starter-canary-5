import { Entry, WhyAttendFields } from '../lib/contentstack';

export const WhyAttend = ({ title, description, image }: Entry<WhyAttendFields>) => (
  <section className="bg-white border-b py-8">
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <div className="w-1/2">
        <img src={image.url} className="p-10" />
      </div>
      <div className="w-1/2">
        <div className="p-10">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">{title}</h2>
          <hr />
          <p className="text-gray-800 p-10 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  </section>
);
