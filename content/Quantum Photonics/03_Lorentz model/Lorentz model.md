---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
%% DECLARE MATH OPERATORS%%

$$
\DeclareMathOperator{\emw}{\mathcal{E}_{\text{EMW}}}
\DeclareMathOperator{\emwz}{\mathcal{E}_{\text{EMW}0}}
$$
%% DECLARE MATH OPERATORS%%

To study how light interacts with matter we can, as a first approximation, think about a **dampened harmonic oscillator** that evolves according to the following second order differential equation 


$$
\frac{d^{2}x}{dt^{2}} - \mu  \frac{dx}{dt} + x = 0
$$

where $x$ is the displacement of the oscillator with respect to the rest position.

The idea of the Lorentz model is to model the electronic cloud as a mass attached to the nucleus by a spring.

When no external electrostatic field is applied, the distribution of electrons is centered around the nucleus and thus there is no **electric dipole moment** ($p = 0$) as visible in the images below.

![[no EF.png|400]]

As soon as we apply a varying electric field $\vec{\mathcal{E}}_\text{EMW}$ the electron cloud feels a force $\vec{F}_\text{EMW}$ associated to the field and a **restoring force** $\vec{F}_A$ due to the attraction to the nucleus (which has a much bigger mass compared to the one of the electron). We also have a **friction force** $\vec{F}_d$ proportional to the velocity of the electrons. In this case we have a net dipole moment due to the fact that the electron cloud is not centered anymore around the nucleus.

![[EMF applied.png|300]]

![[wave.gif|200]]

In case of a single electron we can write the following equation to describe its motion around the rest position: 

$$
\displaylines{
F_\text{EMW} + F_A + F_d = m \frac{d^{2}x}{dt^{2}}\\
\Downarrow \\
-\frac{e}{m} \emw - \frac{\tilde{k}}{m}x - \gamma \frac{ dx}{dt} = \frac{d^{2}x}{dt^{2}}
}
$$

where $x$ is the position relative to the rest position (i.e. the nucleus), $\tilde{k}$ is the **elastic constant** of the restoring force and $\gamma$ is the **damping constant** due to dissipation.

The **resonant frequency** is given by 

$$
\omega_0 = \sqrt{ \frac{\tilde{k}}{m} }
$$


If we now consider the **complex field** of a **linearly polarized monochromatic plane wave** as the product of magnitude and phase $\emw(\omega) = \emwz \cdot e^{ -i\omega t }$ we get (using the equation above and the definition of $\omega_0$) 

$$
-\frac{e}{m} \emwz ~e^{ -i\omega t } = \frac{d^{2} \tilde{x}}{dt^{2}} + \omega_0^{2} \tilde{x} + \gamma \frac{d\tilde{x}}{dt}
$$


whose steady state solutions are given by 

$$
\begin{align}
\tilde{x}(t)&=-\frac{e ~\emwz}{m(\omega_{0}^{2}-\omega^{2}-i\gamma\omega)}\,e^{-i\omega t} \\\\
&=-\frac{e ~\emwz(\omega_{0}^{2}-\omega^{2}+i\gamma\omega)}{m(\omega_{0}^{2}-\omega^{2})^{2}+m(\gamma\omega)^{2}}\big(\cos(\omega t)-\mathrm{i}~\sin(\omega t)\big)
\end{align}
$$


The real part of $\tilde{x}$ is the displacement of the electron with respect to its rest position. 

#todo explain better the formula

<iframe src="https://www.desmos.com/calculator/6sawmcw2hw?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

## Complex polarization

Similarly to what was done for the electromagnetic field, we can write the polarization as a complex quantity 

$$
P(\omega) = P_0 e^{ -i\omega t }
$$

In the case of a medium represented by a gas of $n$ atoms per unit volume with a single electron each, we can rewrite the complex polarization in the following form 

$$
P(\omega) = P_0 e^{  -i\omega t } = - n e \,\tilde{x}(t) \equiv \varepsilon_0 \chi ~\emwz ~e^{ -i\omega t } = \varepsilon_0 \chi ~\emw(\omega)
$$

#todo why the step after $\equiv$?

$\tilde{x}$ in this case is considered as an average of the electron displacement over the considered volume.

The same expression can be obtained  for a generic electron displacement $r(t)$: 

$$
\begin{align}
\vec{P}(\omega) &= \vec{P}_{0} e^{ -i\omega t }  \\
&= -ne \vec{r}(t)  \\
&\equiv \varepsilon_0 \chi ~ \vec{\mathcal{E}}_{\text{EMW}0} ~e^{ -i\omega t }  \\
&= \varepsilon_0 \chi \vec{\mathcal{E}}_{\text{EMW}}(\omega)
\end{align}
$$

We can then extract the real parts from the equation above to get 

$$
P_0 = \varepsilon_0 \chi \emwz \tag{1}
$$

### Frequency dependent optical susceptibility

From $(1)$ we can derive the expression for the frequency dependent optical susceptibility: 

$$
\chi(\omega) = \chi_0 \frac{\omega_0 (\omega_0 ^{2} - \omega^{2} @ i\gamma \omega)}{(\omega_0^{2} - \omega^{2})^{2} + (\gamma\omega)^{2}}
$$

with

$$
\chi_0 = \chi(\omega_0) = \frac{ne^{2}}{\varepsilon_0 m \omega_0 ^{2}}
$$

![[resonance.gif|200]]

*[Source of the animations](https://www.youtube.com/watch?v=PYRIpT-zNYI)*
