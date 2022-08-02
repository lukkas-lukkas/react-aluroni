import style from "./Itens.module.scss";
import itens from "./itens.json";
import Item from "./Item";

export default function Itens() {
    return (
        <div className={style.itens}>
            {itens.map(item => (
                <Item key={item.id} />
            ))}
        </div>
    );
}
