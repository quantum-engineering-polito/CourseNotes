---
nextnote: 
author: 
authorlink: 
draft: true
---
%% questa nota deve essere fusa con [[Group A Intro]] %%

# Polarizers

Polarizers are tools that allow transmission of light waves only with a specific polarization axis. They are based on **dichroic material**, where absorption depends on the electric field direction.


![[Wire-grid-polarizer.svg|300]]

*[Source](https://commons.wikimedia.org/w/index.php?curid=724493)*

## Wave retarders

#todo 

## Polarizing beam splitters

#todo 

### Birefringence

#todo 

## Optical isolators

Optical isolators are devices that allow light transmission in one direction only. They are based mainly on Faraday rotators, which exploit the Faraday effect to perform a rotation of the polarization plane.

![[Faraday_isolator.svg|600]]

*[Source](By Vigneshdm1990 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=87147564)*

# Interference and diffraction

Diffraction and interference are the two phenomena that demonstrated the wave nature of light since they cannot be explained by a corpuscular theory.

## Interference

>[!warning] Some examples from the slides are omitted

Two linearly polarized plane waves with different amplitude and different phase and same frequency travel in the same direction. Their superposition is a wave that travels in the same direction with the same frequency and an amplitude that depends on the phase difference.

$$
\mathcal{E}_{y}(x,t) = {\color{red} \mathcal{E}_{y01}}  \cos(k_1 x - \omega_1 t + {\color{red} \delta_1} ) + {\color{red} \mathcal{E}_{y 02}}  \cos(k_1 x - \omega_1 t + {\color{red} \delta_2} )
$$

### Phasor method

With the **phasor method** the same relation can be written as 

$$
\mathcal{E}_{y}(x,t) = {\color{red} A_1}  \cos(\omega_1 t + {\color{red} \alpha_1} ) + {\color{red} A_2}  \cos( \omega_1 t + {\color{red} \alpha_2} ) = \mathcal{E}_{y 1} + \mathcal{E}_{y 2}
$$

with 

$$
\displaylines{
\alpha_{i} = -k_1 x - \delta_i = \text{const}\\
A_{i} = \mathcal{E}_{y 01}
}
$$

![[phasor.svg|400]]

Each of the two wave functions can be represented as the projection onto the horizontal axis of a vector of length 𝐴, rotating with angular velocity 𝜔#. The sum $\mathcal{E}_{y}(t)$ is thus calculated as the projection of the resultant vector onto the same horizontal axis. It has the expression: 

$$
\mathcal{E}_{y}(t) = {\color{red} A} \cos(\omega_1 t + {\color{red} \alpha} )
$$

with $A = \sqrt{ A_1^{2} + A_2^{2} + 2A_1 A_2 \cos(\delta) }$ , $\delta = \alpha_1 - \alpha_2$ and $tg(\alpha) = [A_1 \sin(\alpha_1) + A_2 \sin(\alpha_2)] /[A_1 \cos(\alpha_1) + A_2 \cos(\alpha_2)]$

The wave intensity is given by 

$$
\boxed{ I = A^{2} = I_1 + I_2 + 2\sqrt{ I_1 I_2 } \cos(\delta) }
$$

### Symbolic method

#todo 

### Interferometers

Interferometers are devices that use interference to perform some kind of measurement (usually differences in optical paths).

The most common kinds of interferometers are the **Mach-Zehnder** and the **Michelson** interferometers. Despite having different structures they work according to the same principles:

- A **monochromatic** EM wave is split into two waves using a **beam splitter**
- The two waves travel along two different path with different length
- The two waves are recombined using another (or the same) beam splitter
- The intensity of the field resulting from the superposition of the two is recorded and analyzed.

![[michelson vs mach zehnder.png|500]]

#### Michelson interferometer

In the Michelson interferometer the input wave (amplitude $\mathcal{E}_\text{in}$) is split in two by a 50:50 beam splitter $BS$ and the two resulting beams are directed towards two perfectly reflecting mirrors $M1$ and $M 2$. The path of one of the beams ($L_2$ in this case) can be varied.

![[michelson.png|300]]

After being reflected by the mirrors the two beams travel back to $BS$ where they are joined back into a single beam (amplitude $\mathcal{E}_\text{out}$).

If we consider the input beam as being linearly polarized and monochromatic with wavelength $\lambda$ and amplitude $\mathcal{E} _\text{in}$ we get 

$$
\begin{align}
\mathcal{E}_\text{out} &= \mathcal{E}_{1} + \mathcal{E}_{2} \\
&= \frac{1}{2} \mathcal{E}_\text{in} e^{ 2ikL_1 } + \frac{1}{2}\mathcal{E}_\text{in} ~ e^{ 2ikL_2 } ~ e^{ i\Delta \phi } \\
& = \frac{1}{2} \mathcal{E}_\text{in} ~e^{ i_2kL_1 } \Big( 1 + e^{ 2ik\Delta L } ~ e^{ i \Delta\phi }\Big)
\end{align}
$$
where $\Delta L$ is the difference between the two optical paths $L_1$ and $L_2$ and $\Delta\phi$ account for any other phase difference accumulated during propagation

The maximum intensity of the output will occur when the exponent inside the parentheses is an integer multiple of $2\pi$, which is to say:

$$
\delta = \frac{4\pi}{\lambda} \Delta L + \Delta\phi = 2m\pi
$$

While the minima will occur when 

$$
\delta = \frac{4\pi}{\lambda} \Delta L + \Delta\phi = (2m + 1)\pi
$$

This means that as $L_2$ is varied, bright and dark fringes will appear at the output with a period equal to $\lambda / 2$.

#### Mach-Zehnder interferometer

#todo 

## Diffraction

Diffraction is a particular interference phenomenon that occurs when an EM wave encounters an obstacle in its path.

![[diffraction scheme.png|400]]

In the image above we can see a plane wave with wavelength $\lambda$ passing through a single slit with width $d$. 

We can have two different regimes depending on the distance $L$ and on the **Rayleigh distance** $d^{2} / \lambda$.

- If $L \gg d^{2} / \lambda$ we are in the **far-field** (**Fraunhofer**) limit
- If $L \lesssim d^{2} / \lambda$ we are in the **near-field** (**Fresnel**) regime

We will limit our analysis only to the Fraunhofer regime, where the pattern on the screen at angle $\theta$ is obtained by summing the field contributions over the indefinitely long slit.

We can apply the [Huygens-Fresnel-Kirchhoff principle](https://en.wikipedia.org/wiki/Huygens%E2%80%93Fresnel_principle) (that states that each element of a wavefront acts as a source of secondary spherical waves) to get 

$$
\mathcal{E}(\theta) = \int_{-d / 2}^{d/2} \exp[-i kx \sin(\theta)] \, dx 
$$

where $kx\sin(\theta)$ is the relative phase shift at a position $x$ across the screen, and $k$ is the wave vector.

If we perform the integral and calculate the intensity of $\mathcal{E}$ (taking the modulus squared) we get 

$$
I(\theta) = \left( \frac{\sin\beta}{\beta} \right)^{2} \qquad \beta = \frac{1}{2} kd\sin(\theta)
$$

which is a $\text{sinc}^{2}$ function.