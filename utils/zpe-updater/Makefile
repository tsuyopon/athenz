#
# Makefile to build ZPE Updater Go utility
# Prerequisite: Go development environment
# Company name: Yahoo Holdings,Inc.
# Copyright 2017 Yahoo Holdings, Inc.
# Licensed under the Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0
#

GOPKGNAME = github.com/AthenZ/athenz/utils/zpe-updater
PKG_DATE=$(shell date '+%Y-%m-%dT%H:%M:%S')
BINARY=zpu
SRC=cmd/tools/main.go

# check to see if go utility is installed
GO := $(shell command -v go 2> /dev/null)
export GOPATH=$(PWD)

ifdef GO

# we need to make sure we have go 1.11+
# the output for the go version command is:
# go version go1.11.1 darwin/amd64

GO_VER_GTEQ11 := $(shell expr `go version | cut -f 3 -d' ' | cut -f2 -d.` \>= 11)
ifneq "$(GO_VER_GTEQ11)" "1"
all:
	@echo "Please install 1.11.x or newer version of golang"
else

.PHONY: vet fmt linux darwin
all: vet fmt tests linux darwin

endif

else

all:
	@echo "go is not available please install golang"

endif

vet:
	go vet .

fmt:
	gofmt -l .

tests:
	go test .

darwin:
	@echo "Building darwin client..."
	GOOS=darwin go build -ldflags "-X main.VERSION=$(PKG_VERSION) -X main.BUILD_DATE=$(PKG_DATE)" -o target/darwin/$(BINARY) $(SRC)

linux:
	@echo "Building linux client..."
	GOOS=linux go build -ldflags "-X main.VERSION=$(PKG_VERSION) -X main.BUILD_DATE=$(PKG_DATE)" -o target/linux/$(BINARY) $(SRC)

clean:
	rm -rf target
