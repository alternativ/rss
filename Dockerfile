# Use a lightweight Python image
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Copy project files
COPY . /app

# Expose default http.server port
EXPOSE 8000

# Serve the static files using Python's built-in HTTP server
CMD ["python", "-m", "http.server", "8000", "--bind", "0.0.0.0"]
