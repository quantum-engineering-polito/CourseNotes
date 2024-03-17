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


## Diffraction

