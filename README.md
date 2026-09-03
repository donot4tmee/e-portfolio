# E-Portfolio

This e-portfolio showcases my qualifications, technical skills, education, professional experience, and selected projects. It provides an overview of my background and demonstrates the work I have created as I continue developing as a professional.

## Run Locally

**Prerequisites:** Node.js

1. Clone the repository and open the project folder:

	```bash
	git clone https://github.com/donot4tmee/e-portfolio.git
	cd e-portfolio
	```

2. Install the project dependencies:

	```bash
	npm install
	```

3. Create a local environment file from the example file:

	```bash
	copy .env.example .env.local
	```

	Add your `GEMINI_API_KEY` to `.env.local` if you are using the Gemini AI features.

4. Start the development server:

	```bash
	npm run dev
	```

5. Open the local URL shown in the terminal, usually `http://localhost:3000`.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

