#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
#define PI 3.14159265358979323846

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

float random(vec2 st){
    return fract(sin(dot(st,vec2(12.9898,78.233))+u_time/100000.+u_mouse.y/1000000.)*43758.5453123);
}

float noise(vec2 st){
    vec2 i=floor(st);
    
    float a=random(i);
    float b=random(i+vec2(1.,0.));
    float c=random(i+vec2(0.,1.));
    float d=random(i+vec2(1.,1.));
    
    vec2 f=fract(st);
    vec2 smoth=f*f*(3.-f*2.);
    // smoth = smoothstep(0.,1.,f);
    return mix(a,b,smoth.x)+(c-a)*smoth.y*(1.-smoth.x)+(d-b)*smoth.x*smoth.y;
}

float line(float x,float y,float width,float smooth){
    return smoothstep((x-smooth),x,y)-smoothstep((x+width-smooth),(x+width),y);
}

void main(){
    vec2 pt=gl_FragCoord.xy/u_resolution;
    pt*=vec2(10.,30.);
    float noi=noise(pt);
    pt=rotate(noi)*pt;
    pt*=1.;
    float line=line((pt.y-.5)*2.,sin(pt.x*6.283)/2.,.1,.1);
    gl_FragColor=vec4(vec3(line),1.);
}