---
nextnote: 
author: Eva
authorlink: https://github.com/deskclam
---
## Drain current

In static conditions the only current flowing in the MOSFET is the drain current $I_{D}$. The gate current is null due to the oxide isolating the gate.

In our analysis of a nMOS we make simplifying assumptions such as:
- The hole current is negligible in all relevant operating conditions
- The reverse saturation current of the *pn* junctions is neglected (can be added later)
- Generation and Recombination phenomena are negligible 
#todo CHECK

With these assumptions $I_{D}$ is completely related to the electron transport along the channel
$$ 
J_{n}(x,y)=-{qn\mu_{n,eff}\frac{\partial\varphi_{ch}}{\partial y}}
$$
The effective mobility characterizes the electron transport in the **channel**, is lower than the bulk mobility, is affected by the surface roughness at the interface between oxide and substrate and depends on the the vertical electrical field induced by the gate oxide.

We calculate $I_{D}$ entering the drain along the y axis, exploiting the invariance of the device along *z* and the definition of [[electron charge per unit area]]: 
#todo add correct link
$$ 
\displaylines{
I_{D}=-\oint_{xz}J_{n}  \, d\sigma =\int_{0}^W  \, dz\int_{0}^{+\infty} qn\mu_{n,eff}\frac{\partial\varphi_{ch}}{\partial y} \, dx \\
I_{D}=-W\mu_{n,eff}Q_{n}(y)\frac{\partial\varphi_{ch}}{\partial y}
}
$$ Neglecting the generation and recombination of electrons and assuming static conditions, the drain current is constant along *y* and integrating through the channel:
$$ 
\int_{0}^{L} I_{D} \, dy =I_{D}L=-W\mu_{n,eff}\int_{0}^{L} Q_{n}(y)\frac{\partial\varphi_{ch}}{\partial y}   \, dy
$$
The channel potential is known at the extremities of the channel, being:
$$ \displaylines{
\varphi_{ch}(0)=V_{SB} \\
and\\
\varphi_{ch}(L)=V_{DB}}
$$
the integral becomes
$$ 
I_{D}=\mu_{n,eff}\frac{W}{L}\int_{V_{SB}} ^{V_{DB}} [-Q_{n}(\varphi_{ch})] \, d\varphi_{ch} 
$$ 
Now we need to substitute the electron charge in the integral #todo insert link to previous note
$$  
\begin{align}

I_{D}&=\mu_{n,eff}\frac{W}{L}\int_{V_{SB}} ^{V_{DB}} [-C_{ox}(V_{GB}-V_{th}-m\varphi_{ch})] \, d\varphi_{ch}\\ 
&= C_{ox}\mu_{n,eff}\frac{W}{L}\left[ (V_{GB}-V_{th})-\frac{m}{2}V_{DS}^{2} \right]
\end{align}
$$

In saturation when $V_{DS}\geq V_{DSsat}=\frac{V_{GS}-V_{th}}{m}$
$$ 
I_{Dsat}=\frac{\beta_{n}}{2m}(V_{GS}-V_{th})^{2}
$$
## Subthreshold current

The residual current below threshold is significant in the scaling process, because it controls the static power dissipation.
Experimentally is exponentially dependent on $V_{GS}$ and nearly insensitive to $V_{DS}$ ($V_{DS}>5-6 \cdot V_{T}$)

We try to find an analytic formula: for $V_{GS}<V_{th}$ the MOS system is in weak inversion, the total semiconductor charge is:
$$ 
Q_{S}=-\sqrt{ 2q\epsilon_{S}N_{A}V_{T}}\left[ \frac{V_{S}}{V_{T}}+\frac{n_{i}^{2}}{N_{A}^{2}}\\exp\left[ -\frac{\varphi_{ch}}{V_{T}}+\frac{V_{S}}{V_{T}} \right] \right]^{1/2}
$$ In this case the depletion charge dominates over the inversion charge, the square-bracketed term can be linearized around $\frac{V_{S}}{V_{T}}$ as:

$$\displaylines{
\lim_{ \alpha \to \infty }\sqrt{ A+\alpha  }\simeq \sqrt{ A }+\frac{\alpha}{2\sqrt{ A }}\\  
Q_{S}=-\sqrt{ 2q\epsilon_{S}N_{A}V_{S} }-\sqrt{ \frac{q\epsilon_{S}N_{A}}{2V_{S}} }V_{T}\frac{n_{i}^{2}}{N_{A}^{2}}\exp\left[ -\frac{\varphi_{ch}}{V_{T}}+\frac{V_{S}}{V_{T}} \right]
}
$$
So the first term corresponds to the depletion charge, hence the second represent the residual inversion charge in weak inversion.
This can be used to calculate the subthreshold drain current, by substituting it in the $I_{D}$ formula, obtaining
$$ 
I_{D}= \mu_{n,eff}\frac{W}{L}\sqrt{ \frac{q\epsilon_{S}N_{A}}{2V_{S}} }V_{T}^2\\exp\left[ \frac{V_{S}}{V_{T}}-\frac{2\phi_{p}}{V_{T}} \right] \cdot\left[ 1-\exp\left[ -\frac{V_{DS}}{V_{T}} \right] \right]
$$

Below the strong inversion condition, $V_{S}$ is independent from the channel potential, and can be taken out of the integration
To find the $I_{D}$ as a function of $V_{GS}$, we need some more calculations. The $V_{S}$ is obtained from the Surface Potential Equation, linearizing it around the strong inversion condition since we are near threshold and neglecting the electron charge, obtaining at first order
$$ 
V_{S}=\frac{V_{GS}-V_{th}}{m}+2\phi_{p}

$$
Substituting it in the drain current, assuming the current independent from $V_{DS}$ and neglecting the term $(V_{GS}-V_{th})$ under the square root the resulting subthreshold drain current is
$$ 
I_{D}\simeq \beta_{n}(m-1)V_{T}^{2}\\exp[\frac{V_{GS}-V_{th}}{mV_{T}}]
$$
The quality of the transistor turn-off is given by the *Subtreshold Swing S* defined as
$$ 
S=\left(\frac{d\log_{10}I_{D}}{dV_{GS}}\right)^{-1}
$$ S should be as small as possible to have a fast switch off of the device.
The increase in temperature leads to a decrease of $V_{th}$ and an increase of S, which both result in a higher $I_{D}$ leakage subthreshold 
The swing depends on $m$, that should be less than 1.5, $m$ represents a limit for the slope, even in the best case scenario ($m=1$) the slope is limited to $60-70 \frac{mV}{dec}$
#todo add transcharacteristics