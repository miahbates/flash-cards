# Flash Cards

Small starter project with a Next.js frontend and Django backend.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000.

Apollo Client is installed and wrapped around the app. It points to:

```bash
http://127.0.0.1:8000/graphql/
```

To point it elsewhere, set `NEXT_PUBLIC_GRAPHQL_URL`.

Useful frontend commands:

```bash
npm test
npm run build
```

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Open the Django admin portal at http://127.0.0.1:8000/admin/.

Log in with the superuser account, choose **Flash cards**, and add records with:

- `name`
- `description`

The `id` is created automatically by the database.

## GraphQL

Graphene-Django is installed and `/graphql/` is wired up with GraphiQL for local development.

Run the backend, then open:

```bash
http://127.0.0.1:8000/graphql/
```

There is only a tiny `health` field in the schema so the endpoint can boot. The flash-card model is not exposed yet, so you can add those GraphQL types and queries yourself.
