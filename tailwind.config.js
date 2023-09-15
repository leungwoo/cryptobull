const { blackA, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        primary:
          // "url('https://images.unsplash.com/photo-1645731504303-860e0da74fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxjcnlwdG8lMjBjb2lucyUyMDNkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')",
          "url('https://cdn.gencraft.com/prod/user/c1185e62-b3ce-45ab-970d-1c6ea897e9b8/0233654a-8887-45b3-b47f-6944a3b4999b/images/image1_0.jpg?Expires=1694899301&Signature=DKUgjbsDqFjXdek0IqNdgEcOa6M1380z1hwx7ajPvNjWfVGxzKCwhjljK-3euIxL6umoKdNNV7ZEsffHn7iFU~uCHgpEfhQgNsMOtbOqV0APaIdngZzBvIUV0MkqLj47zrd9aarhIyVFxKwSo8vzZ55nqmB8GxcxLOA6cv9kU8InHQ4yVqpO~J68PF~-RP9oKbUfbvbOAaIEQEsEiGKCftvQsWOf7JGo9xjwkbrPJE9b91xf9Q0R9ajREAYeFPKzC2H8iLFVoTd5LhfAeLzfSNmojoJ5ywIcfTCDQBX~TmmmpHD2Sgjg7jm9Nbedxcdq2FaOzno9VM6Vm89V4iHWXw__&Key-Pair-Id=K3RDDB1TZ8BHT8')",
        //"url('')",
        //   "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80')",
      },
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        pink: "#da058c",
        teal: "#00b1b1",
        tertiary: "#94A3B8",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    plugins: [],
  },
};
