import Image from "next/image";

const Information = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 bg-white">
        <Image src="/OB.jpeg" alt="logo OB" width="500" height="500" />
        <Image src="/EOB.jpeg" alt="logo EOB" width="500" height="500" />
      </div>
      <p className="text-xl p-10 mx-20 leading-8 text-start">
        La familia OB esta conformada por estas dos empresas, Comercializadora
        Ochoa Bawab, en alianza con Importaciones EOB para brindar un portafolio
        mas completo. <br /> <br /> OB inició operaciones en el año 2011 con la
        importación directa de productos exclusivos de excelente calidad para la
        seguridad de su vehiculo.
      </p>
    </>
  );
};

export default Information;
