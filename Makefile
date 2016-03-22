all: dist/js/bundle.min.js dist/css/bundle.min.css

dist/js/bundle.min.js: src/js/index.js
	cp $^ $@

dist/css/bundle.min.css: src/css/index.css
	cp $^ $@

clean:
	$(RM) dist/js/bundle.min.js dist/css/bundle.min.css

.PHONY: clean
