'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion"
import { useRef } from "react";


export default function Motion() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 100%)"
        },
        visible: {
            pathLength: 1,
            // fill: "rgba(255, 255, 255, 1)"
            fill: "rgba(255, 118, 118, 100%)"
        }
    }


    return (
        <motion.div ref={ref}>
            <svg width="417" height="204" viewBox="0 0 417 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_496_1986" maskUnits="userSpaceOnUse" x="0" y="-0.000488281" width="417" height="204" fill="black">
                    <rect fill="white" y="-0.000488281" width="417" height="204" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M30.0869 171.37C27.9872 171.37 26.4124 170.313 25.3626 168.198C24.6215 166.394 24.251 164.434 24.251 162.32C24.251 159.396 24.745 156.224 25.7331 152.803C28.9444 140.984 35.1509 125.932 44.3524 107.644C31.5073 118.405 20.5457 123.786 11.4676 123.786C7.94751 123.786 5.26114 122.635 3.40847 120.333C1.80282 118.343 1 116.104 1 113.616C1 111.065 1.40141 108.64 2.20423 106.338C4.73622 99.1849 9.05911 92.5293 15.1729 86.3713C20.1751 81.333 25.1773 78.8138 30.1795 78.8138C31.7852 78.8138 33.3291 79.187 34.8112 79.9335C36.6639 80.8665 38.146 82.1727 39.2576 83.8522C40.431 85.5316 41.4808 87.2733 42.4071 89.0771C42.4071 89.2637 43.1482 90.6633 44.6303 93.2757C50.8059 87.3044 56.2713 81.6751 61.0265 76.388C70.4751 59.2825 80.603 42.6435 91.4102 26.4711C102.65 9.49004 110.709 0.999512 115.588 0.999512C116.823 0.999512 117.934 1.34162 118.922 2.02584C120.528 3.33208 121.331 4.85601 121.331 6.59766C121.331 8.65032 120.404 11.2939 118.552 14.5284C115.711 20.0021 112.592 25.2893 109.196 30.3898C97.0917 48.9881 83.876 66.4046 69.5487 82.6392L68.715 84.1321C59.1429 100.864 50.528 118.094 42.8703 135.822C39.165 144.094 36.6639 151.372 35.367 157.654C34.9347 159.645 34.7186 161.231 34.7186 162.413C34.7186 162.973 34.7803 163.439 34.9038 163.812C35.2126 164.559 35.367 165.305 35.367 166.052C35.367 168.167 34.348 169.753 32.3101 170.81C31.569 171.183 30.828 171.37 30.0869 171.37ZM11.4676 113.242C18.0754 113.056 26.4742 108.733 36.6639 100.273C35.5523 98.5318 34.3789 96.4791 33.1438 94.1154C31.7234 91.3786 30.7353 89.7924 30.1795 89.357C27.8328 89.357 24.8377 91.3475 21.1941 95.3284C17.3652 99.4337 14.4936 103.85 12.5792 108.577C11.8381 110.381 11.4676 111.936 11.4676 113.242Z" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M86.1301 130.877C82.3013 130.877 78.9356 129.881 76.0331 127.891C72.1425 124.781 70.1972 120.085 70.1972 113.802C70.1972 106.587 73.0688 99.3093 78.8121 91.9695C85.4817 83.4479 92.5836 78.6272 100.118 77.5076C100.674 77.4454 101.26 77.4143 101.878 77.4143C106.139 77.4143 109.288 79.0004 111.326 82.1727C112.253 83.9144 112.716 85.5938 112.716 87.2111C112.716 88.5173 112.253 90.2589 111.326 92.436C110.4 94.5509 108.733 96.6346 106.324 98.6873C100.272 103.85 91.8116 107.955 80.9426 111.003C80.7574 111.936 80.6647 112.869 80.6647 113.802C80.6647 114.611 80.7574 115.575 80.9426 116.695C81.3132 119.121 83.0732 120.333 86.2228 120.333C88.1989 120.333 90.5148 119.929 93.1703 119.121C103.916 115.575 116.421 108.795 130.687 98.7806C134.33 96.3547 137.758 93.7422 140.969 90.9432C142.019 90.0101 143.192 89.5436 144.489 89.5436C144.613 89.5436 145.045 89.5747 145.786 89.6369C146.527 89.6369 147.361 90.1967 148.287 91.3164C149.275 92.3738 149.769 93.5245 149.769 94.7686C149.769 94.893 149.738 95.3284 149.677 96.0748C149.677 96.8212 149.121 97.6921 148.009 98.6873C144.427 101.86 140.629 104.783 136.615 107.458C117.595 120.955 101.909 128.668 89.5576 130.597C88.3842 130.783 87.2417 130.877 86.1301 130.877ZM87.9828 97.381C95.0847 94.4576 99.7164 91.3164 101.878 87.9575C101.26 87.9575 100.674 88.0197 100.118 88.1441C96.1654 89.3259 92.1204 92.4049 87.9828 97.381Z" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M144.397 154.482C142.235 154.482 140.413 153.58 138.931 151.776C138.128 150.532 137.727 149.288 137.727 148.044C137.727 146.987 138.19 145.65 139.116 144.032C139.981 142.415 141.278 140.798 143.007 139.181C148.812 133.52 154.926 128.14 161.348 123.039C159.99 120.24 156.717 117.254 151.529 114.082C149.491 112.714 147.546 111.252 145.693 109.697C141.432 106.214 139.302 102.171 139.302 97.5676C139.302 92.0939 142.853 86.5579 149.955 80.9598C155.266 76.7923 161.071 73.4023 167.37 70.7898C171.816 68.986 175.954 68.084 179.783 68.084C183.056 68.084 185.865 69.1415 188.212 71.2563C190.374 73.1846 191.454 75.9526 191.454 79.5603C191.454 80.9909 190.929 82.2349 189.88 83.2924C188.891 84.2876 187.687 84.7852 186.267 84.7852C184.785 84.7852 183.519 84.2876 182.469 83.2924C181.481 82.2349 180.987 80.7421 180.987 78.8138C180.678 78.6894 180.246 78.6272 179.69 78.6272C179.505 78.6272 179.165 78.6583 178.671 78.7205C178.239 78.7205 177.621 78.8138 176.818 79.0004C176.077 79.1248 175.521 79.2181 175.151 79.2803C170.951 80.5244 166.968 82.2971 163.201 84.5986C159.496 86.7135 156.13 89.3259 153.104 92.436C152.734 92.747 152.301 93.2135 151.807 93.8355C151.313 94.4576 150.85 95.1418 150.418 95.8882C149.985 96.5724 149.769 97.1322 149.769 97.5676C149.769 98.6251 150.356 99.7447 151.529 100.927C152.703 102.046 154.833 103.632 157.921 105.685C163.664 109.541 167.586 113.149 169.685 116.508C177.405 110.599 185.371 105.001 193.585 99.7136C204.33 92.9336 210.599 89.5436 212.389 89.5436C214.366 89.5436 215.879 90.4767 216.929 92.3427C217.361 93.1513 217.577 93.9599 217.577 94.7686C217.577 96.8834 216.651 98.4385 214.798 99.4337C200.779 107.147 186.699 116.539 172.557 127.611C172.557 127.798 172.526 127.953 172.464 128.078C171.785 133.676 168.944 138.932 163.942 143.846C162.337 145.401 159.928 147.267 156.717 149.444C153.506 151.683 150.232 153.238 146.898 154.109C146.033 154.358 145.199 154.482 144.397 154.482Z" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M218.966 124.999C216.187 124.999 213.594 124.221 211.185 122.666C206.986 119.494 204.886 114.642 204.886 108.111C204.886 99.9002 207.758 90.881 213.501 81.0531C214.613 79.2492 216.095 78.3473 217.947 78.3473C218.874 78.3473 219.769 78.5961 220.634 79.0937C222.425 80.1512 223.32 81.6751 223.32 83.6656C223.32 84.5364 223.073 85.4072 222.579 86.278C217.824 94.6131 215.446 101.828 215.446 107.924C215.446 108.608 215.508 109.604 215.632 110.91C215.755 112.154 216.28 113.18 217.206 113.989C217.762 114.3 218.349 114.455 218.966 114.455C222.857 114.455 227.334 113.025 232.398 110.163C237.462 107.24 242.279 103.974 246.849 100.367C251.481 96.6968 255.186 93.5556 257.965 90.9432C259.015 90.0101 260.188 89.5436 261.485 89.5436C261.547 89.5436 261.948 89.5747 262.689 89.6369C263.492 89.6369 264.357 90.1967 265.283 91.3164C266.271 92.3738 266.765 93.5245 266.765 94.7686L266.673 96.0748C266.611 97.5676 261.64 102.171 251.759 109.884C238.79 119.96 227.859 124.999 218.966 124.999ZM222.579 74.4286C220.85 74.4286 219.677 73.62 219.059 72.0027C218.812 71.3185 218.689 70.5721 218.689 69.7635C218.689 68.6439 218.936 67.3998 219.43 66.0314C220.294 63.6677 221.406 61.7084 222.764 60.1533C224.185 58.5361 226.254 57.7275 228.971 57.7275C231.812 57.7275 233.232 58.816 233.232 60.993C233.232 62.3615 232.861 64.0409 232.12 66.0314C231.132 68.3951 229.712 70.3855 227.859 72.0027C226.068 73.62 224.308 74.4286 222.579 74.4286Z" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M235.826 202.999C233.294 202.999 230.885 202.066 228.6 200.2C226.315 197.775 225.173 195.007 225.173 191.896C225.173 183.064 233.572 171.339 250.369 156.721C261.979 146.396 274.917 135.946 289.183 125.372C296.037 112.558 301.503 100.958 305.579 90.57C305.332 90.8188 305.116 90.9432 304.93 90.9432C294.926 98.7806 287.731 104.161 283.347 107.085C275.504 112.372 269.174 115.015 264.357 115.015C261.084 115.015 258.397 113.864 256.298 111.563C254.692 109.573 253.889 107.302 253.889 104.752C253.889 102.264 254.291 99.8691 255.094 97.5676C257.873 90.0412 262.195 83.3857 268.062 77.6009C273.25 72.5626 278.252 70.0434 283.069 70.0434C286.651 70.0434 289.584 71.5673 291.869 74.6152C293.166 76.3569 294.339 78.2851 295.389 80.4C295.945 81.5196 296.532 82.6081 297.149 83.6656C299.619 81.7995 300.978 80.8043 301.225 80.6799C303.263 79.0626 305.64 77.632 308.358 76.388C309.593 75.8282 310.766 75.5482 311.878 75.5482C313.298 75.5482 314.657 75.9837 315.954 76.8545C317.745 78.4717 318.64 80.3378 318.64 82.4526C318.64 86.6823 315.151 96.1681 308.172 110.91L307.709 111.843C328.706 96.9767 340.378 89.5436 342.725 89.5436C344.639 89.5436 346.152 90.4145 347.264 92.1561C347.758 93.0269 348.005 93.8977 348.005 94.7686C348.005 96.759 347.109 98.3141 345.318 99.4337C333.832 106.276 317.806 117.286 297.242 132.463C283.964 156.908 271.181 175.662 258.891 188.724C251.666 196.437 244.873 201.071 238.512 202.626C237.586 202.875 236.69 202.999 235.826 202.999ZM236.011 192.363C236.937 192.363 238.389 191.772 240.365 190.59C243.823 188.6 247.59 185.428 251.666 181.073C259.509 172.738 267.352 162.195 275.195 149.444C248.887 170.592 235.733 184.743 235.733 191.896V192.363H236.011ZM264.357 104.472C268.556 104.223 276.708 99.4337 288.812 90.1034C287.824 88.424 286.867 86.7134 285.94 84.9718C284.582 82.4215 283.625 80.9598 283.069 80.5866C280.784 80.5866 277.82 82.5459 274.176 86.4646C270.285 90.6322 267.383 95.0796 265.468 99.8069C264.789 101.611 264.419 103.166 264.357 104.472Z" />
                    <motion.path variants={icon}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }} d="M371.194 124.345C367.551 124.345 364.679 123.133 362.58 120.707C361.036 118.405 360.264 115.855 360.264 113.056C360.264 111.874 360.542 109.852 361.097 106.991C361.715 104.13 362.734 100.989 364.154 97.5676C364.216 97.5054 364.247 97.4121 364.247 97.2877C365.05 95.4217 366.223 92.436 367.767 88.3307C366.223 89.2015 364.772 90.1034 363.413 91.0365C352.853 98.3763 341.089 107.644 328.12 118.841C327.194 119.649 326.051 120.054 324.693 120.054C323.766 120.054 322.902 119.836 322.099 119.4C320.37 118.343 319.505 116.881 319.505 115.015C319.505 114.02 319.752 113.087 320.246 112.216L338.865 79.6536C339.977 77.9119 341.49 77.0411 343.404 77.0411C344.269 77.0411 345.165 77.2899 346.091 77.7875C347.82 78.8449 348.685 80.3689 348.685 82.3593C348.685 83.2302 348.438 84.101 347.944 84.9718L343.59 92.6226C357.67 81.2397 367.242 75.5482 372.306 75.5482C374.159 75.5482 375.826 76.2325 377.308 77.6009C378.79 79.1559 379.531 80.9598 379.531 83.0124L379.439 84.8785C379.315 86.9312 377.926 91.2542 375.27 97.8475C372.244 105.747 370.731 110.817 370.731 113.056V113.709L371.194 113.802C374.097 113.802 377.864 112.216 382.496 109.044C387.127 105.872 391.636 102.419 396.02 98.6873C400.405 94.9552 403.801 91.9384 406.21 89.6369C407.322 88.7039 408.526 88.2374 409.823 88.2374C409.884 88.2374 410.286 88.2685 411.027 88.3307C411.768 88.3307 412.602 88.8905 413.528 90.0101C414.516 91.0676 415.01 92.2183 415.01 93.4623C415.01 93.5867 414.979 94.0532 414.917 94.8619C414.917 95.6083 414.115 96.6968 412.509 98.1275C405.098 105.094 398.583 110.599 392.963 114.642C384.132 121.111 376.876 124.345 371.194 124.345Z" />
                </mask>
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M30.0869 171.37C27.9872 171.37 26.4124 170.313 25.3626 168.198C24.6215 166.394 24.251 164.434 24.251 162.32C24.251 159.396 24.745 156.224 25.7331 152.803C28.9444 140.984 35.1509 125.932 44.3524 107.644C31.5073 118.405 20.5457 123.786 11.4676 123.786C7.94751 123.786 5.26114 122.635 3.40847 120.333C1.80282 118.343 1 116.104 1 113.616C1 111.065 1.40141 108.64 2.20423 106.338C4.73622 99.1849 9.05911 92.5293 15.1729 86.3713C20.1751 81.333 25.1773 78.8138 30.1795 78.8138C31.7852 78.8138 33.3291 79.187 34.8112 79.9335C36.6639 80.8665 38.146 82.1727 39.2576 83.8522C40.431 85.5316 41.4808 87.2733 42.4071 89.0771C42.4071 89.2637 43.1482 90.6633 44.6303 93.2757C50.8059 87.3044 56.2713 81.6751 61.0265 76.388C70.4751 59.2825 80.603 42.6435 91.4102 26.4711C102.65 9.49004 110.709 0.999512 115.588 0.999512C116.823 0.999512 117.934 1.34162 118.922 2.02584C120.528 3.33208 121.331 4.85601 121.331 6.59766C121.331 8.65032 120.404 11.2939 118.552 14.5284C115.711 20.0021 112.592 25.2893 109.196 30.3898C97.0917 48.9881 83.876 66.4046 69.5487 82.6392L68.715 84.1321C59.1429 100.864 50.528 118.094 42.8703 135.822C39.165 144.094 36.6639 151.372 35.367 157.654C34.9347 159.645 34.7186 161.231 34.7186 162.413C34.7186 162.973 34.7803 163.439 34.9038 163.812C35.2126 164.559 35.367 165.305 35.367 166.052C35.367 168.167 34.348 169.753 32.3101 170.81C31.569 171.183 30.828 171.37 30.0869 171.37ZM11.4676 113.242C18.0754 113.056 26.4742 108.733 36.6639 100.273C35.5523 98.5318 34.3789 96.4791 33.1438 94.1154C31.7234 91.3786 30.7353 89.7924 30.1795 89.357C27.8328 89.357 24.8377 91.3475 21.1941 95.3284C17.3652 99.4337 14.4936 103.85 12.5792 108.577C11.8381 110.381 11.4676 111.936 11.4676 113.242Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M86.1301 130.877C82.3013 130.877 78.9356 129.881 76.0331 127.891C72.1425 124.781 70.1972 120.085 70.1972 113.802C70.1972 106.587 73.0688 99.3093 78.8121 91.9695C85.4817 83.4479 92.5836 78.6272 100.118 77.5076C100.674 77.4454 101.26 77.4143 101.878 77.4143C106.139 77.4143 109.288 79.0004 111.326 82.1727C112.253 83.9144 112.716 85.5938 112.716 87.2111C112.716 88.5173 112.253 90.2589 111.326 92.436C110.4 94.5509 108.733 96.6346 106.324 98.6873C100.272 103.85 91.8116 107.955 80.9426 111.003C80.7574 111.936 80.6647 112.869 80.6647 113.802C80.6647 114.611 80.7574 115.575 80.9426 116.695C81.3132 119.121 83.0732 120.333 86.2228 120.333C88.1989 120.333 90.5148 119.929 93.1703 119.121C103.916 115.575 116.421 108.795 130.687 98.7806C134.33 96.3547 137.758 93.7422 140.969 90.9432C142.019 90.0101 143.192 89.5436 144.489 89.5436C144.613 89.5436 145.045 89.5747 145.786 89.6369C146.527 89.6369 147.361 90.1967 148.287 91.3164C149.275 92.3738 149.769 93.5245 149.769 94.7686C149.769 94.893 149.738 95.3284 149.677 96.0748C149.677 96.8212 149.121 97.6921 148.009 98.6873C144.427 101.86 140.629 104.783 136.615 107.458C117.595 120.955 101.909 128.668 89.5576 130.597C88.3842 130.783 87.2417 130.877 86.1301 130.877ZM87.9828 97.381C95.0847 94.4576 99.7164 91.3164 101.878 87.9575C101.26 87.9575 100.674 88.0197 100.118 88.1441C96.1654 89.3259 92.1204 92.4049 87.9828 97.381Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M144.397 154.482C142.235 154.482 140.413 153.58 138.931 151.776C138.128 150.532 137.727 149.288 137.727 148.044C137.727 146.987 138.19 145.65 139.116 144.032C139.981 142.415 141.278 140.798 143.007 139.181C148.812 133.52 154.926 128.14 161.348 123.039C159.99 120.24 156.717 117.254 151.529 114.082C149.491 112.714 147.546 111.252 145.693 109.697C141.432 106.214 139.302 102.171 139.302 97.5676C139.302 92.0939 142.853 86.5579 149.955 80.9598C155.266 76.7923 161.071 73.4023 167.37 70.7898C171.816 68.986 175.954 68.084 179.783 68.084C183.056 68.084 185.865 69.1415 188.212 71.2563C190.374 73.1846 191.454 75.9526 191.454 79.5603C191.454 80.9909 190.929 82.2349 189.88 83.2924C188.891 84.2876 187.687 84.7852 186.267 84.7852C184.785 84.7852 183.519 84.2876 182.469 83.2924C181.481 82.2349 180.987 80.7421 180.987 78.8138C180.678 78.6894 180.246 78.6272 179.69 78.6272C179.505 78.6272 179.165 78.6583 178.671 78.7205C178.239 78.7205 177.621 78.8138 176.818 79.0004C176.077 79.1248 175.521 79.2181 175.151 79.2803C170.951 80.5244 166.968 82.2971 163.201 84.5986C159.496 86.7135 156.13 89.3259 153.104 92.436C152.734 92.747 152.301 93.2135 151.807 93.8355C151.313 94.4576 150.85 95.1418 150.418 95.8882C149.985 96.5724 149.769 97.1322 149.769 97.5676C149.769 98.6251 150.356 99.7447 151.529 100.927C152.703 102.046 154.833 103.632 157.921 105.685C163.664 109.541 167.586 113.149 169.685 116.508C177.405 110.599 185.371 105.001 193.585 99.7136C204.33 92.9336 210.599 89.5436 212.389 89.5436C214.366 89.5436 215.879 90.4767 216.929 92.3427C217.361 93.1513 217.577 93.9599 217.577 94.7686C217.577 96.8834 216.651 98.4385 214.798 99.4337C200.779 107.147 186.699 116.539 172.557 127.611C172.557 127.798 172.526 127.953 172.464 128.078C171.785 133.676 168.944 138.932 163.942 143.846C162.337 145.401 159.928 147.267 156.717 149.444C153.506 151.683 150.232 153.238 146.898 154.109C146.033 154.358 145.199 154.482 144.397 154.482Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M218.966 124.999C216.187 124.999 213.594 124.221 211.185 122.666C206.986 119.494 204.886 114.642 204.886 108.111C204.886 99.9002 207.758 90.881 213.501 81.0531C214.613 79.2492 216.095 78.3473 217.947 78.3473C218.874 78.3473 219.769 78.5961 220.634 79.0937C222.425 80.1512 223.32 81.6751 223.32 83.6656C223.32 84.5364 223.073 85.4072 222.579 86.278C217.824 94.6131 215.446 101.828 215.446 107.924C215.446 108.608 215.508 109.604 215.632 110.91C215.755 112.154 216.28 113.18 217.206 113.989C217.762 114.3 218.349 114.455 218.966 114.455C222.857 114.455 227.334 113.025 232.398 110.163C237.462 107.24 242.279 103.974 246.849 100.367C251.481 96.6968 255.186 93.5556 257.965 90.9432C259.015 90.0101 260.188 89.5436 261.485 89.5436C261.547 89.5436 261.948 89.5747 262.689 89.6369C263.492 89.6369 264.357 90.1967 265.283 91.3164C266.271 92.3738 266.765 93.5245 266.765 94.7686L266.673 96.0748C266.611 97.5676 261.64 102.171 251.759 109.884C238.79 119.96 227.859 124.999 218.966 124.999ZM222.579 74.4286C220.85 74.4286 219.677 73.62 219.059 72.0027C218.812 71.3185 218.689 70.5721 218.689 69.7635C218.689 68.6439 218.936 67.3998 219.43 66.0314C220.294 63.6677 221.406 61.7084 222.764 60.1533C224.185 58.5361 226.254 57.7275 228.971 57.7275C231.812 57.7275 233.232 58.816 233.232 60.993C233.232 62.3615 232.861 64.0409 232.12 66.0314C231.132 68.3951 229.712 70.3855 227.859 72.0027C226.068 73.62 224.308 74.4286 222.579 74.4286Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M235.826 202.999C233.294 202.999 230.885 202.066 228.6 200.2C226.315 197.775 225.173 195.007 225.173 191.896C225.173 183.064 233.572 171.339 250.369 156.721C261.979 146.396 274.917 135.946 289.183 125.372C296.037 112.558 301.503 100.958 305.579 90.57C305.332 90.8188 305.116 90.9432 304.93 90.9432C294.926 98.7806 287.731 104.161 283.347 107.085C275.504 112.372 269.174 115.015 264.357 115.015C261.084 115.015 258.397 113.864 256.298 111.563C254.692 109.573 253.889 107.302 253.889 104.752C253.889 102.264 254.291 99.8691 255.094 97.5676C257.873 90.0412 262.195 83.3857 268.062 77.6009C273.25 72.5626 278.252 70.0434 283.069 70.0434C286.651 70.0434 289.584 71.5673 291.869 74.6152C293.166 76.3569 294.339 78.2851 295.389 80.4C295.945 81.5196 296.532 82.6081 297.149 83.6656C299.619 81.7995 300.978 80.8043 301.225 80.6799C303.263 79.0626 305.64 77.632 308.358 76.388C309.593 75.8282 310.766 75.5482 311.878 75.5482C313.298 75.5482 314.657 75.9837 315.954 76.8545C317.745 78.4717 318.64 80.3378 318.64 82.4526C318.64 86.6823 315.151 96.1681 308.172 110.91L307.709 111.843C328.706 96.9767 340.378 89.5436 342.725 89.5436C344.639 89.5436 346.152 90.4145 347.264 92.1561C347.758 93.0269 348.005 93.8977 348.005 94.7686C348.005 96.759 347.109 98.3141 345.318 99.4337C333.832 106.276 317.806 117.286 297.242 132.463C283.964 156.908 271.181 175.662 258.891 188.724C251.666 196.437 244.873 201.071 238.512 202.626C237.586 202.875 236.69 202.999 235.826 202.999ZM236.011 192.363C236.937 192.363 238.389 191.772 240.365 190.59C243.823 188.6 247.59 185.428 251.666 181.073C259.509 172.738 267.352 162.195 275.195 149.444C248.887 170.592 235.733 184.743 235.733 191.896V192.363H236.011ZM264.357 104.472C268.556 104.223 276.708 99.4337 288.812 90.1034C287.824 88.424 286.867 86.7134 285.94 84.9718C284.582 82.4215 283.625 80.9598 283.069 80.5866C280.784 80.5866 277.82 82.5459 274.176 86.4646C270.285 90.6322 267.383 95.0796 265.468 99.8069C264.789 101.611 264.419 103.166 264.357 104.472Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M371.194 124.345C367.551 124.345 364.679 123.133 362.58 120.707C361.036 118.405 360.264 115.855 360.264 113.056C360.264 111.874 360.542 109.852 361.097 106.991C361.715 104.13 362.734 100.989 364.154 97.5676C364.216 97.5054 364.247 97.4121 364.247 97.2877C365.05 95.4217 366.223 92.436 367.767 88.3307C366.223 89.2015 364.772 90.1034 363.413 91.0365C352.853 98.3763 341.089 107.644 328.12 118.841C327.194 119.649 326.051 120.054 324.693 120.054C323.766 120.054 322.902 119.836 322.099 119.4C320.37 118.343 319.505 116.881 319.505 115.015C319.505 114.02 319.752 113.087 320.246 112.216L338.865 79.6536C339.977 77.9119 341.49 77.0411 343.404 77.0411C344.269 77.0411 345.165 77.2899 346.091 77.7875C347.82 78.8449 348.685 80.3689 348.685 82.3593C348.685 83.2302 348.438 84.101 347.944 84.9718L343.59 92.6226C357.67 81.2397 367.242 75.5482 372.306 75.5482C374.159 75.5482 375.826 76.2325 377.308 77.6009C378.79 79.1559 379.531 80.9598 379.531 83.0124L379.439 84.8785C379.315 86.9312 377.926 91.2542 375.27 97.8475C372.244 105.747 370.731 110.817 370.731 113.056V113.709L371.194 113.802C374.097 113.802 377.864 112.216 382.496 109.044C387.127 105.872 391.636 102.419 396.02 98.6873C400.405 94.9552 403.801 91.9384 406.21 89.6369C407.322 88.7039 408.526 88.2374 409.823 88.2374C409.884 88.2374 410.286 88.2685 411.027 88.3307C411.768 88.3307 412.602 88.8905 413.528 90.0101C414.516 91.0676 415.01 92.2183 415.01 93.4623C415.01 93.5867 414.979 94.0532 414.917 94.8619C414.917 95.6083 414.115 96.6968 412.509 98.1275C405.098 105.094 398.583 110.599 392.963 114.642C384.132 121.111 376.876 124.345 371.194 124.345Z" fill="#FF7676" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M30.0869 171.37C27.9872 171.37 26.4124 170.313 25.3626 168.198C24.6215 166.394 24.251 164.434 24.251 162.32C24.251 159.396 24.745 156.224 25.7331 152.803C28.9444 140.984 35.1509 125.932 44.3524 107.644C31.5073 118.405 20.5457 123.786 11.4676 123.786C7.94751 123.786 5.26114 122.635 3.40847 120.333C1.80282 118.343 1 116.104 1 113.616C1 111.065 1.40141 108.64 2.20423 106.338C4.73622 99.1849 9.05911 92.5293 15.1729 86.3713C20.1751 81.333 25.1773 78.8138 30.1795 78.8138C31.7852 78.8138 33.3291 79.187 34.8112 79.9335C36.6639 80.8665 38.146 82.1727 39.2576 83.8522C40.431 85.5316 41.4808 87.2733 42.4071 89.0771C42.4071 89.2637 43.1482 90.6633 44.6303 93.2757C50.8059 87.3044 56.2713 81.6751 61.0265 76.388C70.4751 59.2825 80.603 42.6435 91.4102 26.4711C102.65 9.49004 110.709 0.999512 115.588 0.999512C116.823 0.999512 117.934 1.34162 118.922 2.02584C120.528 3.33208 121.331 4.85601 121.331 6.59766C121.331 8.65032 120.404 11.2939 118.552 14.5284C115.711 20.0021 112.592 25.2893 109.196 30.3898C97.0917 48.9881 83.876 66.4046 69.5487 82.6392L68.715 84.1321C59.1429 100.864 50.528 118.094 42.8703 135.822C39.165 144.094 36.6639 151.372 35.367 157.654C34.9347 159.645 34.7186 161.231 34.7186 162.413C34.7186 162.973 34.7803 163.439 34.9038 163.812C35.2126 164.559 35.367 165.305 35.367 166.052C35.367 168.167 34.348 169.753 32.3101 170.81C31.569 171.183 30.828 171.37 30.0869 171.37ZM11.4676 113.242C18.0754 113.056 26.4742 108.733 36.6639 100.273C35.5523 98.5318 34.3789 96.4791 33.1438 94.1154C31.7234 91.3786 30.7353 89.7924 30.1795 89.357C27.8328 89.357 24.8377 91.3475 21.1941 95.3284C17.3652 99.4337 14.4936 103.85 12.5792 108.577C11.8381 110.381 11.4676 111.936 11.4676 113.242Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M86.1301 130.877C82.3013 130.877 78.9356 129.881 76.0331 127.891C72.1425 124.781 70.1972 120.085 70.1972 113.802C70.1972 106.587 73.0688 99.3093 78.8121 91.9695C85.4817 83.4479 92.5836 78.6272 100.118 77.5076C100.674 77.4454 101.26 77.4143 101.878 77.4143C106.139 77.4143 109.288 79.0004 111.326 82.1727C112.253 83.9144 112.716 85.5938 112.716 87.2111C112.716 88.5173 112.253 90.2589 111.326 92.436C110.4 94.5509 108.733 96.6346 106.324 98.6873C100.272 103.85 91.8116 107.955 80.9426 111.003C80.7574 111.936 80.6647 112.869 80.6647 113.802C80.6647 114.611 80.7574 115.575 80.9426 116.695C81.3132 119.121 83.0732 120.333 86.2228 120.333C88.1989 120.333 90.5148 119.929 93.1703 119.121C103.916 115.575 116.421 108.795 130.687 98.7806C134.33 96.3547 137.758 93.7422 140.969 90.9432C142.019 90.0101 143.192 89.5436 144.489 89.5436C144.613 89.5436 145.045 89.5747 145.786 89.6369C146.527 89.6369 147.361 90.1967 148.287 91.3164C149.275 92.3738 149.769 93.5245 149.769 94.7686C149.769 94.893 149.738 95.3284 149.677 96.0748C149.677 96.8212 149.121 97.6921 148.009 98.6873C144.427 101.86 140.629 104.783 136.615 107.458C117.595 120.955 101.909 128.668 89.5576 130.597C88.3842 130.783 87.2417 130.877 86.1301 130.877ZM87.9828 97.381C95.0847 94.4576 99.7164 91.3164 101.878 87.9575C101.26 87.9575 100.674 88.0197 100.118 88.1441C96.1654 89.3259 92.1204 92.4049 87.9828 97.381Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M144.397 154.482C142.235 154.482 140.413 153.58 138.931 151.776C138.128 150.532 137.727 149.288 137.727 148.044C137.727 146.987 138.19 145.65 139.116 144.032C139.981 142.415 141.278 140.798 143.007 139.181C148.812 133.52 154.926 128.14 161.348 123.039C159.99 120.24 156.717 117.254 151.529 114.082C149.491 112.714 147.546 111.252 145.693 109.697C141.432 106.214 139.302 102.171 139.302 97.5676C139.302 92.0939 142.853 86.5579 149.955 80.9598C155.266 76.7923 161.071 73.4023 167.37 70.7898C171.816 68.986 175.954 68.084 179.783 68.084C183.056 68.084 185.865 69.1415 188.212 71.2563C190.374 73.1846 191.454 75.9526 191.454 79.5603C191.454 80.9909 190.929 82.2349 189.88 83.2924C188.891 84.2876 187.687 84.7852 186.267 84.7852C184.785 84.7852 183.519 84.2876 182.469 83.2924C181.481 82.2349 180.987 80.7421 180.987 78.8138C180.678 78.6894 180.246 78.6272 179.69 78.6272C179.505 78.6272 179.165 78.6583 178.671 78.7205C178.239 78.7205 177.621 78.8138 176.818 79.0004C176.077 79.1248 175.521 79.2181 175.151 79.2803C170.951 80.5244 166.968 82.2971 163.201 84.5986C159.496 86.7135 156.13 89.3259 153.104 92.436C152.734 92.747 152.301 93.2135 151.807 93.8355C151.313 94.4576 150.85 95.1418 150.418 95.8882C149.985 96.5724 149.769 97.1322 149.769 97.5676C149.769 98.6251 150.356 99.7447 151.529 100.927C152.703 102.046 154.833 103.632 157.921 105.685C163.664 109.541 167.586 113.149 169.685 116.508C177.405 110.599 185.371 105.001 193.585 99.7136C204.33 92.9336 210.599 89.5436 212.389 89.5436C214.366 89.5436 215.879 90.4767 216.929 92.3427C217.361 93.1513 217.577 93.9599 217.577 94.7686C217.577 96.8834 216.651 98.4385 214.798 99.4337C200.779 107.147 186.699 116.539 172.557 127.611C172.557 127.798 172.526 127.953 172.464 128.078C171.785 133.676 168.944 138.932 163.942 143.846C162.337 145.401 159.928 147.267 156.717 149.444C153.506 151.683 150.232 153.238 146.898 154.109C146.033 154.358 145.199 154.482 144.397 154.482Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M218.966 124.999C216.187 124.999 213.594 124.221 211.185 122.666C206.986 119.494 204.886 114.642 204.886 108.111C204.886 99.9002 207.758 90.881 213.501 81.0531C214.613 79.2492 216.095 78.3473 217.947 78.3473C218.874 78.3473 219.769 78.5961 220.634 79.0937C222.425 80.1512 223.32 81.6751 223.32 83.6656C223.32 84.5364 223.073 85.4072 222.579 86.278C217.824 94.6131 215.446 101.828 215.446 107.924C215.446 108.608 215.508 109.604 215.632 110.91C215.755 112.154 216.28 113.18 217.206 113.989C217.762 114.3 218.349 114.455 218.966 114.455C222.857 114.455 227.334 113.025 232.398 110.163C237.462 107.24 242.279 103.974 246.849 100.367C251.481 96.6968 255.186 93.5556 257.965 90.9432C259.015 90.0101 260.188 89.5436 261.485 89.5436C261.547 89.5436 261.948 89.5747 262.689 89.6369C263.492 89.6369 264.357 90.1967 265.283 91.3164C266.271 92.3738 266.765 93.5245 266.765 94.7686L266.673 96.0748C266.611 97.5676 261.64 102.171 251.759 109.884C238.79 119.96 227.859 124.999 218.966 124.999ZM222.579 74.4286C220.85 74.4286 219.677 73.62 219.059 72.0027C218.812 71.3185 218.689 70.5721 218.689 69.7635C218.689 68.6439 218.936 67.3998 219.43 66.0314C220.294 63.6677 221.406 61.7084 222.764 60.1533C224.185 58.5361 226.254 57.7275 228.971 57.7275C231.812 57.7275 233.232 58.816 233.232 60.993C233.232 62.3615 232.861 64.0409 232.12 66.0314C231.132 68.3951 229.712 70.3855 227.859 72.0027C226.068 73.62 224.308 74.4286 222.579 74.4286Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M235.826 202.999C233.294 202.999 230.885 202.066 228.6 200.2C226.315 197.775 225.173 195.007 225.173 191.896C225.173 183.064 233.572 171.339 250.369 156.721C261.979 146.396 274.917 135.946 289.183 125.372C296.037 112.558 301.503 100.958 305.579 90.57C305.332 90.8188 305.116 90.9432 304.93 90.9432C294.926 98.7806 287.731 104.161 283.347 107.085C275.504 112.372 269.174 115.015 264.357 115.015C261.084 115.015 258.397 113.864 256.298 111.563C254.692 109.573 253.889 107.302 253.889 104.752C253.889 102.264 254.291 99.8691 255.094 97.5676C257.873 90.0412 262.195 83.3857 268.062 77.6009C273.25 72.5626 278.252 70.0434 283.069 70.0434C286.651 70.0434 289.584 71.5673 291.869 74.6152C293.166 76.3569 294.339 78.2851 295.389 80.4C295.945 81.5196 296.532 82.6081 297.149 83.6656C299.619 81.7995 300.978 80.8043 301.225 80.6799C303.263 79.0626 305.64 77.632 308.358 76.388C309.593 75.8282 310.766 75.5482 311.878 75.5482C313.298 75.5482 314.657 75.9837 315.954 76.8545C317.745 78.4717 318.64 80.3378 318.64 82.4526C318.64 86.6823 315.151 96.1681 308.172 110.91L307.709 111.843C328.706 96.9767 340.378 89.5436 342.725 89.5436C344.639 89.5436 346.152 90.4145 347.264 92.1561C347.758 93.0269 348.005 93.8977 348.005 94.7686C348.005 96.759 347.109 98.3141 345.318 99.4337C333.832 106.276 317.806 117.286 297.242 132.463C283.964 156.908 271.181 175.662 258.891 188.724C251.666 196.437 244.873 201.071 238.512 202.626C237.586 202.875 236.69 202.999 235.826 202.999ZM236.011 192.363C236.937 192.363 238.389 191.772 240.365 190.59C243.823 188.6 247.59 185.428 251.666 181.073C259.509 172.738 267.352 162.195 275.195 149.444C248.887 170.592 235.733 184.743 235.733 191.896V192.363H236.011ZM264.357 104.472C268.556 104.223 276.708 99.4337 288.812 90.1034C287.824 88.424 286.867 86.7134 285.94 84.9718C284.582 82.4215 283.625 80.9598 283.069 80.5866C280.784 80.5866 277.82 82.5459 274.176 86.4646C270.285 90.6322 267.383 95.0796 265.468 99.8069C264.789 101.611 264.419 103.166 264.357 104.472Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
                <motion.path variants={icon}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }} d="M371.194 124.345C367.551 124.345 364.679 123.133 362.58 120.707C361.036 118.405 360.264 115.855 360.264 113.056C360.264 111.874 360.542 109.852 361.097 106.991C361.715 104.13 362.734 100.989 364.154 97.5676C364.216 97.5054 364.247 97.4121 364.247 97.2877C365.05 95.4217 366.223 92.436 367.767 88.3307C366.223 89.2015 364.772 90.1034 363.413 91.0365C352.853 98.3763 341.089 107.644 328.12 118.841C327.194 119.649 326.051 120.054 324.693 120.054C323.766 120.054 322.902 119.836 322.099 119.4C320.37 118.343 319.505 116.881 319.505 115.015C319.505 114.02 319.752 113.087 320.246 112.216L338.865 79.6536C339.977 77.9119 341.49 77.0411 343.404 77.0411C344.269 77.0411 345.165 77.2899 346.091 77.7875C347.82 78.8449 348.685 80.3689 348.685 82.3593C348.685 83.2302 348.438 84.101 347.944 84.9718L343.59 92.6226C357.67 81.2397 367.242 75.5482 372.306 75.5482C374.159 75.5482 375.826 76.2325 377.308 77.6009C378.79 79.1559 379.531 80.9598 379.531 83.0124L379.439 84.8785C379.315 86.9312 377.926 91.2542 375.27 97.8475C372.244 105.747 370.731 110.817 370.731 113.056V113.709L371.194 113.802C374.097 113.802 377.864 112.216 382.496 109.044C387.127 105.872 391.636 102.419 396.02 98.6873C400.405 94.9552 403.801 91.9384 406.21 89.6369C407.322 88.7039 408.526 88.2374 409.823 88.2374C409.884 88.2374 410.286 88.2685 411.027 88.3307C411.768 88.3307 412.602 88.8905 413.528 90.0101C414.516 91.0676 415.01 92.2183 415.01 93.4623C415.01 93.5867 414.979 94.0532 414.917 94.8619C414.917 95.6083 414.115 96.6968 412.509 98.1275C405.098 105.094 398.583 110.599 392.963 114.642C384.132 121.111 376.876 124.345 371.194 124.345Z" stroke="#FF7676" stroke-width="2" mask="url(#path-1-outside-1_496_1986)" />
            </svg>
        </motion.div>
    );
}
