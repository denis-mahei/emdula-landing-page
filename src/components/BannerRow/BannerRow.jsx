import css from "./BannerRow.module.css";

const BannerRow = () => {
  return (
    <section className={css.bannerWrapper}>
      <div className={css.banners}>
        <div className={css.bannerItem} />
        <div className={css.bannerItem} />
        <div className={css.bannerItem} />
        <div className={css.bannerItem} />
        <div className={css.bannerItem} />
        <div className={css.bannerItem} />
      </div>
    </section>
  );
};
export default BannerRow;
