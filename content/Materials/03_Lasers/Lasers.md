---
nextnote: 
author: Eva, Giacomo
authorlink: https://github.com/deskclam,https://github.com/gamberoillecito
draft: false
---
# Types of light sources

#todo 

## Incandescence

## Luminescence

## Electroluminescence

## Other types



# Light Amplification by Stimulated Emission of Radiation

The main process that allows the lasing process is the stimulated emission, one of the three fundamental ways in which light interacts with matter: stimulated absorption, spontaneous emission and again stimulated emission.


![[absorpion and emission.png|400]]

## Stimulated absorption

In the atomic model the stimulated absorption is when an atom initially in the ground state interacts with an incoming photon. If the frequency of the photon, hence its energy, matches the gap between the ground state and an excited state of the atom, the photon may be absorbed and the atom will be excited.

## Spontaneous emission

Happens when an initially excited atom emits a photon without any external stimulus; the emitted photon has the energy equal to the energy gap between the excited and the ground state (considering a two level system) and is emitted in a **random direction**.

It is important to notice that electrons do not always emit light when decaying from the excited state to the ground state (**radiative decay**). It is also possible to have non **radiative decay**, which corresponds to emission of heat.

## Stimulated emission

On the other hand, stimulated emission requires an incoming photon that, interacting with the atom, "forces"  the emission of a photon with the **same frequency, same direction and same phase** as the incident one.

The external stimulus can have different origins such as:

- Electromagnetic radiation: photon (radiative)
- Thermal energy (non radiative)
- Electric energy (non radiative)

![[stimulated emission.png|400]]
*[Source](https://www.youtube.com/watch?v=BRw2DgYm7DI&list=PLCTGenrx1-SOC- b98RCC1uEGI-Sc-N3C-&index=24)*

Thanks to stimulated emission we can have a cascade effect similar to what can be seen in the image above.

In order to have interaction between the atom and the photon, some conditions have to be met:

1) The impinging photon must have energy $\geq$ than the energy gap between ground and excited state.
2) If the condition above is satisfied but the atom is in the ground state, the impinging photon is absorbed and no photon is emitted.
3) Finally, if the first condition is satisfied and the atom is in the excited state, then we have stimulated emission. 


|        | Photons IN | Interaction | State of the atom | Photons OUT |
| ------ | ---------- | ----------- | ----------------- | ----------- |
| Case 1 | 1          | No          | Any               | 1           |
| Case 2 | 1          | Yes         | Ground            | 0           |
| Case 3 | 1          | Yes         | Excited           | 2           |


Since the cases above are equiprobable, on average the number of photons before and after the interaction will be unchanged. This means that we need a way to favour the third case, which is the one that leads to amplification.

![[firefox_1XOufLlHbm.gif|350]]

The animation above shows that we need a way to bring the atoms in the excited state so that we can have stimulated emission. This condition is known as **population inversion**, which means that we want a higher amount of electrons in $E_2$ (the excited state) compared to $E_1$ (the ground state). If we call $N_{g}$ the population of electrons in the ground state and $N_{e}$ the population in the excited state, the **condition for light amplification is** 

$$
N_{g} < N_{e}
$$

When reaching the steady state $N_{g} = N_{e}$ in a two level system, this means that we need a more complex system to achieve a stable population inversion.

### Three level system

![[fig04_1.jpg|400]]
*[Source](http://www.optique-ingenieur.org/en/courses/OPI_ang_M01_C01/co/Contenu_08.html)*

As we can see from the image above, in a three level system the pump brings the electrons from $E_{1}$ to $E_3$. Since the level $E_3$ is **unstable**, after a very short amount of time $\tau_{32}$, the electrons decay from $E_3$ to $E_2$ in a non radiative way. When on $E_2$ they can go back to $E_1$ via stimulated emission (radiative). Since $E_2$ is **metastable**, the time $\tau_{21}$ that it takes to go back to the ground state is larger: $\tau_{32} > \tau_{21}$. For this reason electrons "spend more time" on $E_2$ which leads to **population inversion**.

It should be noted that, while the pump provides the energy to bring the atom to $E_3$, the energy required for the stimulated emission in provided by another light source, which could be another laser or an incoherent light source.

### Four level system

![[fig05_1.jpg|400]]
*[Source](http://www.optique-ingenieur.org/en/courses/OPI_ang_M01_C01/co/Contenu_08.html)*

To further increase population inversion, we can use a four level system. The idea is similar to the one discussed above, which is to say accumulate electrons on $E_2$ and remove them from $E_1$. In this case an additional level $E_0$, with a rapid decay from $E_1$ is used.

### Example: Nd:YAG

A practical example of a four level gain medium is Nd:YAG ($Nd:Y_3Al_5O_{12}$).

# Optical cavity

$$ \dot{n}  $$ 

if the n of exc states the dn/dt is positive and we have lasing
the material exhibits a threshold behaiour in N0, the threshold is at k/G
non linearity in the emission of light

in a spectral pov, the cavity also acts as a filter, filtering out 

# Spectral POV

## forced oscillator

## forced damped oscillator

the oscillation depends on the losses and the frequencies, in the spectral stdy we see a peak, non asymptotic (thanks to the damping)

# resonance rlc (analogy)

