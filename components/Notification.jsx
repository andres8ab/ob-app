const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses =
      "w-full h-12 flex justify-between py-2 px-[10%] items-center text-white bg-[#690000]";
  }
  if (props.status === "success") {
    specialClasses =
      "w-full h-12 flex justify-between py-2 px-[10%] items-center text-white bg-[#1ad1b9]";
  }

  return (
    <section className={specialClasses}>
      <h2 className="text-base m-0">{props.title}</h2>
      <p className="text-base m-0">{props.message}</p>
    </section>
  );
};

export default Notification;
