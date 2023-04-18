import Head from "next/head";

function Header() {
  return (
    <Head>
      <title>Edgebrix | Demo</title>
      <meta
        name="description"
        content="Embedded no-code workflows-as-a-service"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="og:image"
        content={`https://res.cloudinary.com/dhwxfvlrn/image/upload/v1681825144/Embedded_no-code_workflows-as-a-service_1_gxvvkq.png`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
