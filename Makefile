CSSOUT := dist/css/bundle.css
CSSIN  := src/css/index.css

all: $(CSSOUT)

$(CSSOUT): $(CSSIN)
	cp $^ $@

clean:
	$(RM) $(CSSOUT)

.PHONY: clean
