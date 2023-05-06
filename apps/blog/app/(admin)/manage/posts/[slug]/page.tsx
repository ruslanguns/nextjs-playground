type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <p>Post: {params.slug}</p>;
}
