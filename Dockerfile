FROM 445808685819.dkr.ecr.us-east-2.amazonaws.com/testa-012121:61c071f1-85-587

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

COPY /.  .
RUN npm install

CMD ["node","app.js"]
