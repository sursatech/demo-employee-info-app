# Employee Management System

Small React + TypeScript + Vite app for managing employee information.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Run With Docker

```bash
docker compose up --build
```

Open [http://localhost:5173](http://localhost:5173)

Source files are bind-mounted, so saved changes reload automatically in the browser.

## Publish To Docker Hub

Build the production image:

```bash
docker build -t your-dockerhub-username/employee-info-app:latest .
```

Log in and push:

```bash
docker login
docker push your-dockerhub-username/employee-info-app:latest
```

Pull and run from Docker Hub:

```bash
docker pull your-dockerhub-username/employee-info-app:latest
docker run --rm -p 8080:80 your-dockerhub-username/employee-info-app:latest
```

Open [http://localhost:8080](http://localhost:8080)

## GitHub Actions Publish

This repo now includes [docker-publish.yml](/Users/deepakthapa/Documents/Github/demo-employee-info-app/.github/workflows/docker-publish.yml).

Add these in GitHub repository settings before using it:

- Repository variable `DOCKERHUB_USERNAME` for example `your-dockerhub-username`
- Repository variable `DOCKERHUB_REPOSITORY` for example `employee-info-app`
- Repository secret `DOCKERHUB_TOKEN`

After that, every push to `main` will publish the Docker image to Docker Hub.

## Useful Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run type-check`
- `npm run build:check`
