FROM rust:slim

# Set destination for COPY
WORKDIR /app

# Copy the source code.
COPY . .

RUN cargo install --path .

# Expose the port that the application listens on.
EXPOSE 8080

# What the container should run when it is started.
CMD ["docker-actix-rust"]
