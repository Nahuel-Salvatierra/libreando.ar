export default function TallerHeader(prop) {
  return (
    <>
      <h3 className="fs-2">{prop.titulo}</h3>
      <p className="fs-4">
        {prop.descripcion}
      </p>
    </>
  );
}
