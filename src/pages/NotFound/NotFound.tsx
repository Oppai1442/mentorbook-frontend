// NotFound.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { loadSvgs } from '../../utils'

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});

    useEffect(() => {
        const svgPaths = {
            background: () => import('../../assets/bg/notfound/background.svg'),
        };

        const loadAndSetSvgs = async () => {
            const svgMap = await loadSvgs(svgPaths);
            setSvgData(svgMap);
        };

        loadAndSetSvgs();
    }, []);

    const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <section
            className={`${styles["position-relative"]} ${styles["pt-16"]} ${styles["pb-64"]} ${styles["bg-black"]} ${styles["overflow-hidden"]}`}
        >
            {svgData['background'] && (<img
                className={`${styles["position-absolute"]} ${styles["top-0"]} ${styles["start-50"]} ${styles["translate-middle-x"]} ${styles["h-100"]}`}
                src={svgData['background']}
                alt=""
            />)}
            <div className={`${styles["container"]}`}>
                <div
                    className={`${styles["position-relative"]}`}
                    style={{ zIndex: 50 }}
                >
                    <div className={`${styles["text-center"]}`}>
                        <a
                            className={`${styles["d-inline-block"]} ${styles["mb-60"]}`}
                            href="#"
                        >
                            <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
                        </a>
                    </div>
                    <div className={`${styles["mb-24"]} ${styles["text-center"]}`}>
                        <img
                            className={`${styles["img-fluid"]}`}
                            src="gradia-assets/elements/http-codes/404.png"
                            alt=""
                        />
                    </div>
                    <div className={`${styles["mw-2xl"]} ${styles["mx-auto"]}`}>
                        <div
                            className={`${styles["row"]} ${styles["align-items-end"]} ${styles["g-4"]}`}
                        >
                            <div className={`${styles["col-12"]} ${styles["col-md-6"]}`}>
                                <h2
                                    className={`${styles["fs-12"]} ${styles["fw-semibold"]} ${styles["lh-sm"]} ${styles["text-white"]} ${styles["mb-0"]}`}
                                >
                                    Something went wrong!
                                </h2>
                            </div>
                            <div className={`${styles["col-12"]} ${styles["col-md-6"]}`}>
                                <div
                                    className={`${styles["d-flex"]} ${styles["align-items-center"]}`}
                                >
                                    <a
                                        className={`${styles["d-flex"]} ${styles["align-items-center"]} ${styles["text-white"]}`}
                                        href="#"
                                    >
                                        <svg
                                            className={`${styles["me-3"]}`}
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 14.75L2.75 9.5M2.75 9.5L8 4.25M2.75 9.5L16.25 9.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3
                                            className={`${styles["fs-20"]} ${styles["fw-semibold"]} ${styles["text-white"]} ${styles["text-uppercase"]} ${styles["mb-0"]}`}
                                            style={{ letterSpacing: 1 }}
                                        >
                                            Go back to Homepage
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
