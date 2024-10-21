import style from "./style.module.scss";

export default function About() {
  return (
    <div className={style.about}>
      这是一个about页面
      <h1>这是about中的一个h1标题</h1>
      <div className={style.bg1}>
        <div className={style.left}>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  );
}
