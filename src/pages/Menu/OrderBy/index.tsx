import style from "./OrderBy.module.scss";
import options from "./options.json";

export default function OrderBy() {
    return (
        <button className={style.orderby}>
            <span>Order by</span>
            <div className={style.orderby__options}>
                {options.map(option => (
                    <div className={style.orderby__option} key={option.value}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}
