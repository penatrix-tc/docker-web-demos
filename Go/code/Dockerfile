FROM golang

# Set destination for COPY
WORKDIR /app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
#COPY go.mod go.sum ./
# Copy the source code.
COPY . .
RUN go mod download && go mod verify

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -v -o /docker-gs-ping ./...

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 8080

# Run
CMD ["/docker-gs-ping"]
# syntax=docker/dockerfile:1
