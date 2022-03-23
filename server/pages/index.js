"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: external "react/cjs/react.development"
const react_development_namespaceObject = require("react/cjs/react.development");
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./pages/index.js







function Home() {
    const Menuref = (0,react_development_namespaceObject.useRef)(null);
    const Hiddenref = (0,react_development_namespaceObject.useRef)(null);
    const handleOnClick = ()=>{
        Hiddenref.current.classList.toggle('hidden');
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "head",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "On Dot Courier Kurali"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
                            rel: "stylesheet"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar w-full bg-purple-400 px-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contents-wrapper relative w-full h-full md:flex-row md:flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "brand",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/skyking.png",
                                height: 60,
                                width: 100
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMenuAlt3, {
                            style: {
                                color: 'white',
                                height: '40px',
                                width: "40px",
                                cursor: 'pointer'
                            },
                            className: "absolute top-4 right-0 md:hidden",
                            ref: Menuref,
                            onClick: handleOnClick
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "MenuWrapper hidden transition duration-200 ease-in-out md:flex-row md:flex h-full w-full items-center justify-evenly",
                            ref: Hiddenref,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu md:block",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "items flex flex-col md:flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "p-2 text-white text-base font-bold ease-in duration-100 hover:text-purple-800",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "p-2 text-white text-base font-bold ease-in duration-100 hover:text-purple-800",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Services"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "p-2 text-white text-base font-bold ease-in duration-100 hover:text-purple-800",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Pickup"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "p-2 text-white text-base font-bold ease-in duration-100 hover:text-purple-800",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "extraOptions md:block",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "items",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "option1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "option2"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "heroSection flex px-4 flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "heading",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "leading-tight text-5xl text-gray-800 font-bold mt-20 mb-10 md:text-6xl md:mt-40",
                                    children: "The Best Courier Shop In Tricity !"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "buttons",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 border-red-500 border-2 bg-red-500 text-lg mx-2 rounded-xl text-white font-normal ease-in duration-100 hover:bg-red-600",
                                        children: "Request Pickup"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-2 bg-white mx-2 border-2 font-normal rounded-xl border-red-500 text-lg ease-in duration-100 text-black hover:text-red-600",
                                        children: "Get Directions"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: '/globe.png',
                            height: 800,
                            width: 800
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "servicesSection bg-gray-100 py-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "heading flex flex-row text-center items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center text-5xl text-black font-bold px-2",
                                children: "Our"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "px-2 text-5xl text-purple-500 font-bold text-purple-500",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "para text-center py-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-medium text-xl text-gray-800",
                            children: "What Can We Do For You..."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "servicesContainer flex flex-col items-center justify-evenly md:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "box p-2 m-2 rounded-xl bg-red-500 text-center my-2 relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "centerBox flex flex-row items-center justify-center"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "boxHeading text-white font-bold mb-2 mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl",
                                            children: "Domestic Cargo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "description my-2 text-lg text-white font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, a? Esse ratione ipsum vitae, alias quisquam dicta nesciunt culpa, dolore et accusamus eius rerum minima."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "box p-2 m-2 rounded-xl bg-blue-500 text-center my-2 relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "boxHeading text-white font-bold mb-2 mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl",
                                            children: "International Cargo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "description my-2 text-lg text-white font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, a? Esse ratione ipsum vitae, alias quisquam dicta nesciunt culpa, dolore et accusamus eius rerum minima."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "box p-2 m-2 rounded-xl bg-purple-500 text-center my-2 relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "boxHeading text-white font-bold mb-2 mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl",
                                            children: "Pan Card"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "description my-2 text-lg text-white font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, a? Esse ratione ipsum vitae, alias quisquam dicta nesciunt culpa, dolore et accusamus eius rerum minima."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "testomonalsMain py-8 bg-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "TestimonalsHeading text-center font-bold text-5xl text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Testimonials"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "para text-center font-normal text-white text-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "What others think about us"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Carousel, {
                        indicators: false,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                                className: "h-50",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "avatar w-full flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: '/3.jpg',
                                                        height: 200,
                                                        width: 200,
                                                        className: 'rounded-full'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "PersonName text-center py-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "text-4xl font-bold text-white",
                                                        children: "Bhagwant Singh Maan"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "desc w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "para text-left",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-white font-medium text-xl",
                                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque labore voluptatibus? Quos error, maiores magnam non tempora deserunt dolores?aliquid."
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                                className: "h-50",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "avatar w-full flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: '/2.jpg',
                                                        height: 200,
                                                        width: 200,
                                                        className: 'rounded-full'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "PersonName text-center py-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "text-4xl font-bold text-white",
                                                        children: "Narendra Modi"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "desc w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "para text-left",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-white font-medium text-xl",
                                                    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus similique soluta excepturi odio officia praesentium dolor, illum quod, dolore eos voluptas? Enim non suscipit quo."
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                                className: "h-50",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "avatar w-full flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: '/1.jpg',
                                                        height: 200,
                                                        width: 200,
                                                        className: 'rounded-full'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "PersonName text-center py-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "text-4xl font-bold text-white",
                                                        children: "D. Trump"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "desc w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "para text-left",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-white font-medium text-xl",
                                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat libero provident aspernatur, voluptatibus totam iusto, esse eos in excepturi dolores ex deserunt assumenda nemo."
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ReachUs w-full px-2 my-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "reachTitle py-2 flex flex-row items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl font-normal text-gray-800 text-center",
                                children: "How To"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl text-purple-500 px-2 font-normal",
                                children: "Reach"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl text-gray-800 font-normal",
                                children: "Us ?"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "para",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center",
                            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione vitae harum, fugit deserunt reiciendis ipsa consequuntur id veniam, alias minus soluta nam unde eos cupiditate! Veniam soluta eos eaque?"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.8385683299425!2d76.57688002806603!3d30.83518921128908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbd8a026d03d%3A0xe913902c62acf549!2sOn%20Dot%20Courier%20service!5e0!3m2!1sen!2sin!4v1647755049537!5m2!1sen!2sin",
                        className: "h-full w-full",
                        style: {
                            border: 0
                        },
                        loading: "lazy"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "requestPickup py-4 bg-gray-100",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "requestheading flex flex-row items-center justify-center my-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center text-3xl font-normal text-red-500",
                                children: "Request"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "px-2 text-3xl font-normal text-gray-800",
                                children: "Pickup"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "requestForm px-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Form, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Group, {
                                    className: "my-3",
                                    controlId: "Email",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Control, {
                                        type: "text",
                                        placeholder: "Enter your name",
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid purple',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            borderRadius: '0px',
                                            backgroundColor: 'rgb(243 244 246)'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Group, {
                                    className: "mb-3",
                                    controlId: "Number",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Control, {
                                        type: "number",
                                        placeholder: "Enter your mobile number",
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid purple',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            borderRadius: '0px',
                                            backgroundColor: 'rgb(243 244 246)'
                                        },
                                        className: "border-b-"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Group, {
                                    className: "mb-3",
                                    controlId: "dest",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Form.Control, {
                                        type: "text",
                                        placeholder: "Enter pickup place",
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid purple',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            borderRadius: '0px',
                                            backgroundColor: 'rgb(243 244 246)'
                                        },
                                        className: "border-b-"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Button, {
                                    variant: "primary",
                                    type: "submit",
                                    children: "Submit"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contactUs bg-gray-800 py-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contactHeading flex flex-col items-center justify-center py-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center text-3xl font-normal text-purple-200",
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "para text-base text-purple-200 font-normal text-center",
                                children: "We will glad to meet you"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-normal text-base",
                                    children: "Phone : +91 9988346901 (INDIA)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-normal text-base",
                                    children: "Email : gopalvermakurali.ondot@gmail.com"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(963)));
module.exports = __webpack_exports__;

})();