/* eslint-disable max-len, spaced-comment, import/unambiguous */
// @ts-check
/// <reference path="./typings/knode.config.d.ts" />
/**
 * @type {KnodeConfig.Default}
 */
const knodeConfig = {
    scripts: {
        build: "sh build.sh"
    },
    apps: [
        {
            name: 'mm',
            product: 'gaotu',
            image: {
                type: 'knode-static',
                name: 'test-harbor.baijiahulian.com/wenzaizhibo/mm',
                copy: {
                    './default.conf': '/etc/nginx/conf.d/default.conf',
                    './www': '/www'
                }
            },
            service: {
                replicas: 1,
                namespace: 'wenzaizhizbo',
                domain: 'mm'
            }
        }
    ],
    clusters: {
        test: {
            name: 'test-knode',
            id: 'c-tl6ng',
            accessKey: process.env.CLUSTER_ACCESS_KEY,
            secretKey: process.env.CLUSTER_SECRET_KEY
        },
        beta: {
            name: 'beta-knode',
            id: '',
            accessKey: process.env.CLUSTER_ACCESS_KEY,
            secretKey: process.env.CLUSTER_SECRET_KEY
        },
        prod: {
            name: 'knode',
            id: '',
            accessKey: process.env.CLUSTER_ACCESS_KEY,
            secretKey: process.env.CLUSTER_SECRET_KEY
        }
    },
    domains: {
        test: {
            mm: {
                host: 'test-mm',
                tls: false
            }
        },
        beta: {
            mm: {
                host: 'beta-mm',
                tls: false
            }
        },
        prod: {
            mm: {
                host: 'mm',
                tls: false
            }
        }
    }
};
module.exports = knodeConfig;
