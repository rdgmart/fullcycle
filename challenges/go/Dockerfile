FROM golang:1.14-alpine AS builder

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/hello

FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

ENTRYPOINT ["/go/bin/hello"]