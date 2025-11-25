# Use a lightweight Python image
FROM python:alpine

# Set work directory
WORKDIR /app

# Copy only the application sources
COPY app/ .

# Serve the static files using Python's built-in HTTP server
CMD ["python", "-m", "http.server", "3000", "--bind", "0.0.0.0"]