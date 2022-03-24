import React from "react";

import { useHistory } from "react-router-dom";


const Main = (props) => {

    const history = useHistory();

    const day_text_dict = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };

    const week_days = Object.keys(day_text_dict).map((_d, idx) => day_text_dict[_d]);
    // day_text_dict 딕셔너리에 map함수를 실행시켜 딕셔너리의 해당 key값 value를 받아서 week_days 건넴.
    // week_days = ['일','월','화','수','목','금','토']


    const week_rates = week_days.map((w, idx) => {
        return {
            day: w,
            rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1)
            // Math.random()은 0~1 사이의 부동소수점 난수를 생성
            // min <= numbuer <= max 정수 랜덤 넘버 만들어주는 함수 Math.floor(Math.random() * (max - min + 1) + min)
        };
    });

    return (
        <>
            <div
                style={{
                    maxWidth: "350px",
                    width: "80vw",
                    height: "90vh",
                    margin: "5vh auto",
                    padding: "5vh 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    borderRadius: "5px"
                }}
            >
                <h3 style={{ textAlign: "center", color: "grey" }}>* 내 일주일은? *</h3>

                {/* //요일별로 하나씩 [요일 / 평점 동그라미 5개 / 해당 요일로 이동하는 버튼] */}
                {week_rates.map((w, idx) => {
                    // day는 요일 텍스트가, rate는 랜덤 평점이 들어가요
                    return (
                        <div
                            key={`week_day_${idx}`}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "1rem 0",
                                width: "100%"
                            }}
                        >
                            {/* 요일 텍스트 */}
                            <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold", color: "grey" }}>
                                {w.day}
                            </p>

                            {/* 평점 동그라미 */}
                            {Array.from({ length: 5 }, (item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "30px",
                                            margin: "5px",
                                            backgroundColor: w.rate < idx ? "#ddd" : "lightpink"
                                        }}
                                    ></div>
                                );
                            })}

                            {/* 삼각형 버튼 */}
                            <div
                                style={{
                                    appearance: "none",
                                    backgroundColor: "transparent",
                                    borderColor: "skyblue",
                                    width: "0",
                                    height: "0",
                                    borderTop: "1rem solid transparent",
                                    borderBottom: "1rem solid transparent",
                                    borderLeft: "1.6rem solid skyblue",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                                onClick={() => {
                                    history.push(`/review/${w.day}`);
                                }}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Main;
