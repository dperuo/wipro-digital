JSOUT  := dist/js/bundle.js
JSIN   := src/js/index.js
CSSOUT := dist/css/bundle.css
CSSIN  := src/css/index.css


all: $(JSOUT) $(CSSOUT)

$(JSOUT): $(JSIN)
	npm run js

$(CSSOUT): $(CSSIN)
	cp $^ $@

clean:
	$(RM) $(JSOUT) $(CSSOUT)

.PHONY: clean
