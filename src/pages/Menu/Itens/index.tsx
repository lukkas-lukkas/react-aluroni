import style from "./Itens.module.scss";
import itens from "./itens.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
    search: string,
    filter: number | null,
    orderBy: string,
}

export default function Itens({ search, filter, orderBy }: Props) {
    const [list, setList] = useState(itens);

    function testSearch(title: string) {
        const regex = new RegExp(title, 'i');
        return regex.test(title);
    }

    function testFilter(id: number) {
        if (filter !== null) return filter === id;
        return true;
    }

    useEffect(() => {
        const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(newList);
    }, [search, filter])

    return (
        <div className={style.itens}>
            {list.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}
