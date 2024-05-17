#FROM rust:slim as builder
FROM rust:alpine as builder
RUN apk add --no-cache build-base
WORKDIR /web
COPY . .
RUN cargo build --release

#FROM debian:trixie-slim
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /web
EXPOSE 80
COPY --from=builder /web/target/release/web ./bin/web
COPY --from=builder /web/templates ./templates
COPY --from=builder /web/static ./static
RUN chmod +x /web/bin/web
CMD ["./bin/web"]
