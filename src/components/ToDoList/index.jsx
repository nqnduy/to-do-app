import React from "react";
import styles from "./style.module.scss";
export default function ToDoList() {
    return <div className={styles.toDoList}>
        <div className="input-group">
            <input type="text" placeholder="Nhập công việc.."/>
        </div>
    </div>;
}
