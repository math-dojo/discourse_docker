FROM debian:buster-slim

RUN mkdir -p /usr/src/math_dojo_discourse
COPY ./* /usr/src/math_dojo_discourse
WORKDIR /usr/src/math_dojo_discourse
CMD ./launcher rebuild app