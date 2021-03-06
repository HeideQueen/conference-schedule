module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1580762410711-aa47eb8872d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
      }),
    },
  },
  variants: {
    extend: { display: ["group-hover"] },
  },
  plugins: [],
}
