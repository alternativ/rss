# Use a lightweight Python image
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Copy project files
COPY . /app

# Serve the static files using Python's built-in HTTP server
CMD ["python", "-m", "http.server", "3000", "--bind", "0.0.0.0"]
