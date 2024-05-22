---
nextnote: "[[Lasers]]"
author: Eva
authorlink: https://github.com/deskclam
---
# Clauser Horn Shimony and Holt (CHSH) game

In the CHSH game there are two players $A$ and $B$ and a referee $R$. The referee generates two random bits $x,y \in \{0,1\}$ and sends $x$ to $A$ and $y$ to $B$. The players then respond to the referee with their own bits, $a$ and $b$.
The referee then checks if these bits satisfy the winning condition 

$$
x \cdot y = a \oplus b
$$

where $\oplus$ represents the binary addition.

The goal of the players is to score as many points as possible without communicating to each other after the beginning of the game. They can, however, decide a strategy before starting.

An example of game could be this one 


|         | $x$ | $y$ | $a$ | $b$ | $x\cdot y$ | $x \oplus y$ | Result |
| ------- | --- | --- | --- | --- | ---------- | ------------ | ------ |
| Round 1 | 0   | 1   | 0   | 1   | 0          | 1            | Loss   |
| Round 2 | 0   | 1   | 1   | 1   | 0          | 0            | Wind   |
| Round 3 | 1   | 1   | 1   | 0   | 1          | 1            | Win    |

It can be shown that the optimal classical strategy that the players can adopt is to $75 \%$.

If we consider a quantum strategy, in which the players share an entangled state such as $1 /\sqrt{ 2 } (\ket{00} + \ket{11})$, the players could do the following:

- $A$
	- If $x = 0 \to$ measure in the $Z$ basis
	- If $x = 1 \to$ measure in the $X$ basis
		- If the outcome is $+1 \to a = 0$
		- If the outcome is $+- \to a = 1$
- $B$
	- If $y = 0 \to$ measure in the $(Z + X)/\sqrt{ 2 }$ basis
	- If $y = 1 \to$ measure in the $(Z - X)/\sqrt{ 2 }$ basis
		- If the outcome is $+1 \to b = 0$
		- If the outcome is $-1 \to b = 1$

It can be shown that this strategy gives the players a $85 \%$ winning probability.

# Entangled states

An entangled state is a state whose global state cannot be written as the tensor product of local states.

A product state, on the other hand, is one that can be written as a tensor product of local states.

# Spontaneous Parametric Down Conversion (SPDC)

![[SPDC.png|400]]

SPDC is a process that can be used to create a pair of entangled photons. It is based on the properties of non linear crystals and on momentum and energy conservation principles.

In a very simplified view we can see that a non linear crystal is pumped with a high intensity laser (pump) with momentum $k_\text{pump}$ and frequency $\omega _\text{pump}$. Due to the properties of non linear crystals this generates two photons (signal and idler) such that $\hbar\omega _\text{i} + \hbar\omega _\text{s} = \hbar\omega _\text{pump}$.

![[spdc2.png|400]]

It is important to notice that SPDC is an extremely rare event ($1/10^{6}$ photons gets converted) and this is the main reason why we need a very powerful pump. To increase the conversion rate **pulsed lasers** are often used since they usually provide a more intense peak power and allow the sample to cool down between pulses.

## Crystals for SPDC

The mostly used crystal for SPDC is BBO ( $\beta-\ce{BaB2O4}$) because of its **high second order susceptibility** but also lithium niobate  $\ce{LiNbO3}$ could be used.

More in general, a crystal that can be used for SPDC needs to have the following properties:

- Should not absorb light at the frequency range of interest
- Should fulfill energy and momentum conservation

In order to determine if a crystal is a good candidate for SPDC, we need a detailed knowledge of its optical properties, such as the **refractive index dispersion** described below.

### Refractive index dispersion

In the plot we have the complex refractive index dispersion for silicon (as an example? #todo).

The blue curve is $n$, the real part, while the red curve is $k$, the imaginary part. 

$$
n_\ce{Si}(\lambda) = n(\lambda) + ik(\lambda)
$$

![[ref index Si.png|400]]

$k$ is related to the **absorption** of the material and thus we want to minimize it (ideally zero).

## Sellmeier equation

From Wikipedia: *The **Sellmeier equation** is an [empirical relationship](https://en.wikipedia.org/wiki/Empirical_relationship "Empirical relationship") between [refractive index](https://en.wikipedia.org/wiki/Refractive_index "Refractive index") and [wavelength](https://en.wikipedia.org/wiki/Wavelength "Wavelength") for a particular [transparent](https://en.wikipedia.org/wiki/Transparency_(optics) "Transparency (optics)") [medium](https://en.wikipedia.org/wiki/Optical_medium "Optical medium"). The equation is used to determine the [dispersion](https://en.wikipedia.org/wiki/Dispersion_(optics) "Dispersion (optics)") of [light](https://en.wikipedia.org/wiki/Light "Light") in the medium.*

It has the form 

$$
n^{2}(\lambda) = 1 + \sum_{i} \frac{B_{i}\lambda^{2}}{\lambda^{2}- C_{i}}
$$

where $n$ is the refractive index, $\lambda$ is the wavelength, and $B_{i}$ and $C_{i}$ are experimentally determined Sellmeier coefficients.

The curve for $SiO_2$ is reported below.

![[sellmeier for SiO2.png|300]]

Since BBO is birefringent, its ordinary and extraordinary refractive indices are given by two Sellmeier equations plotted below.

![[sellmeier BBO.png|400]]

The plot represents the Sellmeier equations of BBO with $n_{e}(\theta)$ for $\theta = 90 ^{\circ}$ (in black) and  $n_o$ (in red) as a function of the wavelength $\lambda$. The pink curve is  $n_{e}(\theta = 31.7 ^{\circ})$. We have phase-matching between $400 nm$ and $800 nm$ (the two grey circles) when we fulfill a condition where $n_{e}(\omega_{s}) = n_{o}(2\omega_{p})$. This is the phase matching for SHG condition for this particular case at these particular wavelengths for a type I non-linear BBO crystal and in a collinear configuration.


## SPDC with BBO

#todo 

## Periodic poling

#todo 

## SPDC explanation

#todo