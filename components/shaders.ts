export const $vertexShader = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform float uTime;
    uniform vec2 uResolution;

    void main() {
        float k = sin(uTime / 40.0);
        if (k < 0.0) {
            k = 0.0;
        }
        k = sin(uTime / 20.0) * k;
        if (k < 0.0) {
            k = 0.0;
        }
        vec3 vertexPosition = aVertexPosition;
        float wave = sin(uTime / 20000.0);
        vec2 uPosition = vec2(0, 0);
        float uDistance = distance(uPosition, vec2(vertexPosition.x, vertexPosition.y));
        float waveSinusoid = sin(4.0 * (uDistance - (uTime / 20.0)));
        float distanceStrength = (0.2 / (uDistance + 0.2));
        float distortionEffect = waveSinusoid * distanceStrength * k / 15.0;

        vertexPosition.z +=  distortionEffect;
        vertexPosition.x +=  (distortionEffect * (uResolution.x / uResolution.y) * (uPosition.x - vertexPosition.x));
        vertexPosition.y +=  distortionEffect * (uPosition.y - vertexPosition.y);

        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        vTextureCoord = aTextureCoord;
        vVertexPosition = vertexPosition;
    }
`;

export const $fragmentShader = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform float uTime;
    uniform vec2 uResolution;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform sampler2D simplePlaneTexture;

    void main( void ) {
        vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
        vec4 finalColor = texture2D(simplePlaneTexture, textureCoords);

        finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
        finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);
        finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);

        gl_FragColor = finalColor;
    }
`;
