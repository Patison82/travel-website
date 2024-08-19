"use client";
import { useTranslation } from "next-i18next";

export default function HotelSection() {
  const { t } = useTranslation();
  return (
    <div
      className="container h-72 rounded-xl flex items-center justify-center bg-secondaryAccent m-auto mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/glasses.jpg')" }}
    >
      <div className="box ">
        <h1 className="font-bold text-3xl lg:text-5xl drop-shadow-lg">
          {t("hotelsection_header")}
        </h1>
        <p className="font-bold text-2xl lg:text-3xl mt-5">
          {t("hotelsection_p")}
        </p>
        <button className="z-40 font-bold text-3xl bg-gradient-to-tr from-primary to-secondary p-3 lg:w-1/10 w-1/10 rounded-2xl mt-10">
          <a href="hotels">{t("hotelsection_btn")}</a>
        </button>
      </div>
    </div>
  );
}
